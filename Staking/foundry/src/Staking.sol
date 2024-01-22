// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.23;

import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import {IPool} from "./interfaces/IPool.sol";
import {IWrappedTokenGatewayV3} from "./interfaces/IWrappedTokenGatewayV3.sol";
import {InterestRates} from "./libraries/InterestRates.sol";

/**
 * @title Staking Yield from AaveV3
 * @notice This contract is for creating a DeFi ETH staking dapp to generate yield from AaveV3
 * @dev This contract implements 3 different staking periods with different APYs
 * @dev This contract integrate with AaveV3 to lend for passive income generation
 * @dev The contract implements WETH Gateway to convert ETH to WETH and deposit to AaveV3
 */

contract Staking {
    error Staking__MsgValueIsZero();
    error Staking__MappingKeyDoesNotExist();
    error Staking__NotOwner();
    error Staking__NotCreator();
    error Staking__PositionDoesNotExist();
    error Staking__TransferFailed();

    using InterestRates for uint256;

    // AaveV3 Lending Pool Address
    IPool private s_lendingPool;

    // WETH Gateway Address
    IWrappedTokenGatewayV3 private s_wethGatewayAddress;

    // aWeth tokens generated after depositing ETH to AaveV3
    address private s_aWethAddress;

    address private s_owner;

    // Position is created after the user deposits ETH to AaveV3
    struct Position {
        uint256 positionId;
        address walletAddress; // Wallet address of the user
        uint256 createdDate;
        uint256 unlockDate; // Date when the position is unlocked
        uint256 percentInterest;
        uint256 weiStaked;
        uint256 weiInterest;
        bool open;
    }

    // Instance of the Position struct
    Position private s_position;

    // Incremental ID for the position
    uint256 private s_currentPositionId;

    event Deposit(address indexed _from, uint256 _value);
    event Withdraw(address indexed _to, uint256 _value);
    event NewLockPeriod(uint256 _numDays, uint256 _basisPoints);
    event NewUnlockDate(uint256 _positionId, uint256 _newUnlockDate);

    // Every new position created will be added to this mapping
    mapping(uint256 => Position) private s_positions;

    // Query for all positions created by a wallet address
    mapping(address => uint256[]) private s_positionIdsByAddress;

    // Data for number of days and interest rates
    mapping(uint256 => uint256) private s_tiers;

    // Array that contains integers for lock periods (30 days, 90 days, 365 days)
    uint256[] private s_lockPeriods;

    // Payable to allow the deployer of the contract to send Ether when deploying
    constructor(IPool _lendingPool, IWrappedTokenGatewayV3 _wethGatewayAddress, address _aWethAddress) payable {
        s_owner = msg.sender;
        s_currentPositionId = 0;

        s_tiers[30] = 700; // 700 basis point = 7% APY
        s_tiers[90] = 1000; // 1000 basis point = 10% APY
        s_tiers[365] = 1500; // 1500 basis point = 15% APY

        s_lockPeriods = [30, 90, 365];

        s_lendingPool = _lendingPool;
        s_wethGatewayAddress = _wethGatewayAddress;
        s_aWethAddress = _aWethAddress;
    }

    receive() external payable {}

    /**
     * @notice Function to allow user to deposit ETH funds to the contract
     * @notice Position is created after the user deposits ETH to AaveV3
     * @notice positionId is pushed to the s_positionIdsByAddress mapping to keep track of all position
     * @dev the wethGatewayAddress interface take the funds from the contract and deposit to AaveV3
     * @dev aWeth tokens are generated and balance is updated as aWeth tokens to keep track of the position
     */
    function stakeEther(uint256 _numDays) external payable {
        if (msg.value == 0) revert Staking__MsgValueIsZero();
        if (s_tiers[_numDays] == 0) revert Staking__MappingKeyDoesNotExist();

        Position memory position = s_positions[s_currentPositionId];

        position.positionId = s_currentPositionId;
        position.walletAddress = msg.sender;
        position.createdDate = block.timestamp;
        position.unlockDate = block.timestamp + (_numDays * 1 days);
        position.percentInterest = s_tiers[_numDays];
        position.weiStaked = msg.value;
        position.weiInterest = InterestRates.calculateInterest(s_tiers[_numDays], _numDays, msg.value);
        position.open = true;

        s_positionIdsByAddress[msg.sender].push(s_currentPositionId);
        s_currentPositionId++;

        // Deposit ETH via WETH Gateway to AaveV3
        s_wethGatewayAddress.depositETH{value: msg.value}(address(s_lendingPool), address(this), 0);

        emit Deposit(msg.sender, msg.value);
    }

    /**
     * @notice Function to allow user to unstake ETH funds from the contract and earn interest
     * @notice The function can only be called by the user who created the position
     * @notice If the user unstake before unlockDate, the user will not earn interest
     * @dev First the WETH will be withdrawn from AaveV3 to the contract and then transfer to the user as ETH
     * @dev wethGatewayAddress needs to be approved to burn the aWeth tokens
     * @param _positionId The positionId of the position created by the user
     * @notice The user then receives the ETH and the position is closed
     */
    function withdrawPosition(uint256 _positionId) external {
        if (!s_positions[_positionId].open) revert Staking__PositionDoesNotExist();
        if (msg.sender != s_positions[_positionId].walletAddress) revert Staking__NotCreator();

        s_positions[_positionId].open = false;

        // Withdraw ETH from AaveV3 to the contract via WETH Gateway
        // It will convert aWeth tokens to ETH
        // Ensure you set the relevant ERC20 allowance of aWETH, before calling the function
        IERC20(s_aWethAddress).approve(address(s_wethGatewayAddress), type(uint256).max);
        s_wethGatewayAddress.withdrawETH(address(s_lendingPool), s_positions[_positionId].weiStaked, address(this));

        // Interest won't be paid if the user unstake before unlockDate
        if (block.timestamp > s_positions[_positionId].unlockDate) {
            uint256 amount = s_positions[_positionId].weiStaked + s_positions[_positionId].weiInterest;
            (bool success,) = payable(msg.sender).call{value: amount}("");
            if (!success) revert Staking__TransferFailed();
        } else {
            (bool success,) = payable(msg.sender).call{value: s_positions[_positionId].weiStaked}("");
            if (!success) revert Staking__TransferFailed();
        }

        emit Withdraw(msg.sender, s_positions[_positionId].weiStaked);
    }

    /**
     * @notice Function to allow owner of the contract to change lockPeriods
     * @dev Only owner of the contract can call this function
     */
    function setLockPeriod(uint256 _numDays, uint256 _basisPoints) external {
        if (msg.sender != s_owner) revert Staking__NotOwner();
        s_tiers[_numDays] = _basisPoints;
        s_lockPeriods.push(_numDays);
        emit NewLockPeriod(_numDays, _basisPoints);
    }

    // @notice Change unlock date of the position
    function setUnlockDate(uint256 _positionId, uint256 _newUnlockDate) external {
        if (msg.sender != s_owner) revert Staking__NotOwner();
        s_positions[_positionId].unlockDate = _newUnlockDate;
        emit NewUnlockDate(_positionId, _newUnlockDate);
    }

    // Getter Function
    function getLockPeriods() external view returns (uint256[] memory) {
        return s_lockPeriods;
    }

    function getInterestRate(uint256 _numDays) external view returns (uint256) {
        return s_tiers[_numDays];
    }

    function getPositionById(uint256 _positionId) external view returns (Position memory) {
        return s_positions[_positionId];
    }

    function getPositionByAddress(address _walletAddress) external view returns (uint256[] memory) {
        return s_positionIdsByAddress[_walletAddress];
    }

    function getCurrentPositionId() external view returns (uint256) {
        return s_currentPositionId;
    }

    function getWeiFromPosition(uint256 _positionId) external view returns (uint256) {
        return s_positions[_positionId].weiStaked;
    }

    function getContractAWethBalance() external view returns (uint256) {
        return IERC20(s_aWethAddress).balanceOf(address(this));
    }

    function getLendingPoolAddress() external view returns (IPool) {
        return s_lendingPool;
    }

    function getAWethAddress() external view returns (address) {
        return s_aWethAddress;
    }

    function getAWethGatewayAddress() external view returns (address) {
        return address(s_wethGatewayAddress);
    }

    function getContractOwner() external view returns (address) {
        return s_owner;
    }

    function getTiers() external view returns (uint256[] memory) {
        return s_lockPeriods;
    }
}

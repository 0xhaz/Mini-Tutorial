// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.23;

import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import {InterestRates} from "../libraries/InterestRates.sol";
import {console} from "forge-std/Console.sol";

contract MockStaking {
    error Staking__MsgValueIsZero();
    error Staking__MappingKeyDoesNotExist();
    error Staking__NotOwner();
    error Staking__NotCreator();
    error Staking__PositionDoesNotExist();
    error Staking__TransferFailed();

    using InterestRates for uint256;

    address private s_owner;

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

    Position private s_position;

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

    constructor() payable {
        s_owner = msg.sender;
        s_currentPositionId = 0;

        s_tiers[30] = 700; // 700 basis point = 7% APY
        s_tiers[90] = 1000; // 1000 basis point = 10% APY
        s_tiers[365] = 1500; // 1500 basis point = 15% APY

        s_lockPeriods = [30, 90, 365];
    }

    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    fallback() external payable {}

    function stakeEther(uint256 _numDays) external payable returns (uint256) {
        if (msg.value == 0) revert Staking__MsgValueIsZero();
        if (s_tiers[_numDays] == 0) revert Staking__MappingKeyDoesNotExist();

        Position storage position = s_positions[s_currentPositionId];

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

        emit Deposit(msg.sender, msg.value);

        return s_currentPositionId - 1;
    }

    function withdrawPosition(uint256 _positionId) external {
        if (!s_positions[_positionId].open) revert Staking__PositionDoesNotExist();
        if (msg.sender != s_positions[_positionId].walletAddress) revert Staking__NotCreator();

        s_positions[_positionId].open = false;

        // Interest won't be paid if the user unstake before unlockDate
        if (block.timestamp >= s_positions[_positionId].unlockDate) {
            // @dev minus 1 eth for gas fee allocation
            uint256 amount = s_positions[_positionId].weiStaked + s_positions[_positionId].weiInterest - 1e18;

            (bool success,) = payable(msg.sender).call{value: amount}("");
            if (!success) revert Staking__TransferFailed();

            emit Withdraw(msg.sender, amount);
        } else {
            (bool success,) = payable(msg.sender).call{value: s_positions[_positionId].weiStaked}("");
            if (!success) revert Staking__TransferFailed();

            emit Withdraw(msg.sender, s_positions[_positionId].weiStaked);
        }
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

    function getCurrentPositionId() external view returns (uint256) {
        return s_currentPositionId;
    }

    function getWeiFromPosition(uint256 _positionId) external view returns (uint256) {
        return s_positions[_positionId].weiStaked;
    }

    function getContractOwner() external view returns (address) {
        return s_owner;
    }

    function getTiers() external view returns (uint256[] memory) {
        return s_lockPeriods;
    }

    function getCalculateInterest(uint256 _basisPoints, uint256 _numDays, uint256 _weiAmount)
        external
        pure
        returns (uint256)
    {
        return InterestRates.calculateInterest(_basisPoints, _numDays, _weiAmount);
    }

    function getUserBalance() external view returns (uint256) {
        return address(msg.sender).balance;
    }
}

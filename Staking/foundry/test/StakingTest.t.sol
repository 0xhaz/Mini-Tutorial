// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.23;

import {Test, console} from "forge-std/Test.sol";
import {MockStaking} from "../src/mocks/MockStaking.sol";
import {HelperConfig} from "../script/HelperConfig.s.sol";

contract StakingTest is Test {
    MockStaking public staking;
    HelperConfig helperConfig;

    address public deployer;
    address public owner = address(0x1);
    address public stakeUser = address(0x2);

    uint256 public constant INITIAL_ETH_BALANCE = 100 ether;
    uint256 public constant STAKE_AMOUNT = 10 ether;

    uint256 public constant EXPECTED_INTEREST = 700 * (10 * 1e18) / 10000;

    event Deposit(address indexed _from, uint256 _value);
    event Withdraw(address indexed _to, uint256 _value);
    event NewLockPeriod(uint256 _numDays, uint256 _basisPoints);
    event NewUnlockDate(uint256 _positionId, uint256 _newUnlockDate);

    function setUp() external {
        vm.startPrank(owner);
        staking = new MockStaking();
        deployer = owner;
        vm.stopPrank();
        vm.deal(stakeUser, INITIAL_ETH_BALANCE);
    }

    modifier depositedAmount() {
        vm.startPrank(stakeUser);
        staking.stakeEther{value: STAKE_AMOUNT}(30);
        vm.stopPrank();
        _;
    }

    modifier withdrawPosition() {
        vm.startPrank(stakeUser);
        staking.withdrawPosition(0);
        vm.stopPrank();
        _;
    }

    modifier afterUnlockDate() {
        vm.startPrank(stakeUser);
        staking.stakeEther{value: STAKE_AMOUNT}(30);
        vm.warp(staking.getPositionById(0).createdDate + 30 days);
        vm.roll(block.number + 1);
        staking.withdrawPosition(0);
        vm.stopPrank();
        _;
    }

    function test_Owner() public {
        assertEq(deployer, owner);
    }

    function test_Tiers() public {
        uint256[] memory tiers = new uint256[](3);
        tiers[0] = 30;
        tiers[1] = 90;
        tiers[2] = 365;

        assertEq(staking.getTiers(), tiers);
    }

    function test_Calculate_Interest() public {
        uint256 calculatedInterest = staking.getCalculateInterest(700, 30, STAKE_AMOUNT);
        assertEq(calculatedInterest, EXPECTED_INTEREST);
    }

    function test_Deposit() public depositedAmount {
        assertEq(address(staking).balance, STAKE_AMOUNT);
        assertEq(staking.getCurrentPositionId(), 1);
        assertEq(staking.getPositionById(0).positionId, 0);
        assertEq(staking.getPositionById(0).walletAddress, stakeUser);
        assertEq(staking.getPositionById(0).createdDate, block.timestamp);
        assertEq(staking.getPositionById(0).unlockDate, block.timestamp + 30 days);
        assertEq(staking.getPositionById(0).percentInterest, 700);
        assertEq(staking.getPositionById(0).weiStaked, STAKE_AMOUNT);
        assertEq(staking.getPositionById(0).weiInterest, EXPECTED_INTEREST);
        assertTrue(staking.getPositionById(0).open);
    }

    function test_Deposit_Emit_Events() public {
        vm.prank(stakeUser);
        vm.expectEmit(true, false, false, false);
        emit Deposit(stakeUser, STAKE_AMOUNT);
        staking.stakeEther{value: STAKE_AMOUNT}(30);
    }

    function test_Revert_If_Deposit_Zero() public {
        vm.prank(stakeUser);
        vm.expectRevert(MockStaking.Staking__MsgValueIsZero.selector);
        staking.stakeEther{value: 0}(30);
    }

    function test_Revert_If_NumDays_Is_Zero() public {
        vm.prank(stakeUser);
        vm.expectRevert(MockStaking.Staking__MappingKeyDoesNotExist.selector);
        staking.stakeEther{value: STAKE_AMOUNT}(0);
    }

    function test_Withdraw_Position_Before_Unlock() public depositedAmount withdrawPosition {
        assertEq(address(staking).balance, 0);
        assertEq(staking.getPositionById(0).open, false);
    }

    function test_Withdraw_Position_After_Unlock_Date() public afterUnlockDate {
        assertGe(block.timestamp, staking.getPositionById(0).unlockDate);

        uint256 expectedBalance = STAKE_AMOUNT + EXPECTED_INTEREST - 1e18;

        assertEq(staking.getPositionById(0).open, false);
        assertEq(expectedBalance, staking.getPositionById(0).weiStaked + staking.getPositionById(0).weiInterest - 1e18);
    }
}

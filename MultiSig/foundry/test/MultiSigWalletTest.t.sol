// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

import {Test, console} from "forge-std/Test.sol";
import {MultiSigWallet} from "../src/MultiSigWallet.sol";
import {HelperConfig} from "../script/HelperConfig.s.sol";
import {DeployMultiSigWallet} from "../script/DeployMultiSigWallet.s.sol";

contract MultiSigWalletTest is Test {
    MultiSigWallet multiSigWallet;
    HelperConfig helperConfig;

    address public MULTISIG_OWNER_1 = address(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
    address public MULTISIG_OWNER_2 = address(0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
    address public MULTISIG_OWNER_3 = address(0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC);
    address public FUND_USER = makeAddr("fundUser");

    uint256 public constant WALLET_AMOUNT = 1000 ether;
    uint256 public constant DEPOSIT_AMOUNT = 100 ether;
    uint256 public constant FUND_AMOUNT = 100 ether;

    event Deposit(address indexed sender, uint256 value, uint256 balance);
    event SubmitTransaction(uint256 indexed txId, address indexed owner, address indexed destination, uint256 value);
    event ApproveTransaction(uint256 indexed txId, address indexed owner);
    event ExecuteTransaction(uint256 indexed txId, address indexed destination, uint256 value, bytes data);
    event RevokeTransaction(uint256 indexed txId, address indexed owner);
    event Withdraw(uint256 amount, address indexed recipient);

    function setUp() external {
        DeployMultiSigWallet deployer = new DeployMultiSigWallet();
        (multiSigWallet, helperConfig) = deployer.run();
        vm.deal(MULTISIG_OWNER_1, WALLET_AMOUNT);
        vm.deal(MULTISIG_OWNER_2, WALLET_AMOUNT);
        vm.deal(MULTISIG_OWNER_3, WALLET_AMOUNT);
    }

    modifier depositedAmount() {
        vm.prank(MULTISIG_OWNER_1);
        multiSigWallet.deposit{value: DEPOSIT_AMOUNT}();
        vm.prank(MULTISIG_OWNER_2);
        multiSigWallet.deposit{value: DEPOSIT_AMOUNT}();
        vm.prank(MULTISIG_OWNER_3);
        multiSigWallet.deposit{value: DEPOSIT_AMOUNT}();
        _;
    }

    modifier approvedTransaction() {
        vm.prank(MULTISIG_OWNER_1);
        multiSigWallet.submitTransaction(FUND_USER, FUND_AMOUNT, "");
        vm.prank(MULTISIG_OWNER_2);
        multiSigWallet.approveTransaction(0);
        vm.prank(MULTISIG_OWNER_3);
        multiSigWallet.approveTransaction(0);
        _;
    }

    function test_Deposit() public depositedAmount {
        assertEq(address(multiSigWallet).balance, DEPOSIT_AMOUNT * 3);
        assertEq(MULTISIG_OWNER_1.balance, WALLET_AMOUNT - DEPOSIT_AMOUNT);
        assertEq(MULTISIG_OWNER_2.balance, WALLET_AMOUNT - DEPOSIT_AMOUNT);
        assertEq(MULTISIG_OWNER_3.balance, WALLET_AMOUNT - DEPOSIT_AMOUNT);
    }

    function test_Deposit_Emit_Events() public {
        vm.prank(MULTISIG_OWNER_1);
        vm.expectEmit(true, false, false, false);
        emit Deposit(MULTISIG_OWNER_1, DEPOSIT_AMOUNT, address(this).balance);
        multiSigWallet.deposit{value: DEPOSIT_AMOUNT}();
    }

    function test_Withdraw() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        multiSigWallet.withdraw(DEPOSIT_AMOUNT);
        assertEq(MULTISIG_OWNER_1.balance, WALLET_AMOUNT);
    }

    function test_Revert_If_Withdraw_Is_Not_Owner() public depositedAmount {
        vm.prank(FUND_USER);
        vm.expectRevert(MultiSigWallet.MSW__Unauthorized.selector);
        multiSigWallet.withdraw(DEPOSIT_AMOUNT);
    }

    function test_Revert_If_Withdraw_Exceeds_Balance() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        vm.expectRevert(MultiSigWallet.MSW__NotEnoughFunds.selector);
        multiSigWallet.withdraw(DEPOSIT_AMOUNT * 4);
    }

    function test_Submit_Transaction() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        multiSigWallet.submitTransaction(FUND_USER, FUND_AMOUNT, "");

        assertEq(multiSigWallet.getTransactionCount(), 1);

        (address destination, uint256 value, bytes memory data, bool executed, uint256 numApprovals) =
            multiSigWallet.getTransaction(0);

        assertEq(destination, FUND_USER);
        assertEq(value, FUND_AMOUNT);
        assertEq(data, "");
        assertEq(executed, false);
        assertEq(numApprovals, 0);
    }

    function test_Emit_Submit_Transaction() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        vm.expectEmit(true, true, true, false);
        emit SubmitTransaction(0, MULTISIG_OWNER_1, FUND_USER, FUND_AMOUNT);
        multiSigWallet.submitTransaction(FUND_USER, FUND_AMOUNT, "");
    }

    function test_Revert_If_Submit_Transaction_Done_By_Non_Wallet_Owner() public depositedAmount {
        vm.prank(FUND_USER);
        vm.expectRevert(MultiSigWallet.MSW__Unauthorized.selector);
        multiSigWallet.submitTransaction(FUND_USER, FUND_AMOUNT, "");
    }

    function test_Revert_If_Funds_Exceed_Balance_On_Submit_Transaction() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        vm.expectRevert(MultiSigWallet.MSW__NotEnoughFunds.selector);
        multiSigWallet.submitTransaction(FUND_USER, DEPOSIT_AMOUNT * 4, "");
    }

    function test_Approve_Transaction_And_Executed() public depositedAmount approvedTransaction {
        assertEq(multiSigWallet.getTransactionCount(), 1);

        (address destination, uint256 value, bytes memory data, bool executed, uint256 numApprovals) =
            multiSigWallet.getTransaction(0);

        assertEq(destination, FUND_USER);
        assertEq(value, FUND_AMOUNT);
        assertEq(data, "");
        assertEq(executed, true);
        assertEq(numApprovals, 2);
        assertEq(FUND_USER.balance, FUND_AMOUNT);
        assert(numApprovals >= multiSigWallet.getnumRequired());
    }

    function test_Emit_Approve_Transaction() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        multiSigWallet.submitTransaction(FUND_USER, FUND_AMOUNT, "");

        vm.prank(MULTISIG_OWNER_2);
        vm.expectEmit(true, true, false, false);

        emit ApproveTransaction(0, MULTISIG_OWNER_2);
        multiSigWallet.approveTransaction(0);
    }

    function test_Emit_Execute_Transaction() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        multiSigWallet.submitTransaction(FUND_USER, FUND_AMOUNT, "");

        vm.prank(MULTISIG_OWNER_2);
        multiSigWallet.approveTransaction(0);

        vm.prank(MULTISIG_OWNER_3);
        vm.expectEmit(true, true, false, false);

        emit ExecuteTransaction(0, FUND_USER, FUND_AMOUNT, "");
        multiSigWallet.approveTransaction(0);
    }

    function test_Reverts_If_Approve_Transaction_Done_By_None_Wallet_Owner() public depositedAmount {
        vm.prank(FUND_USER);
        vm.expectRevert(MultiSigWallet.MSW__Unauthorized.selector);
        multiSigWallet.approveTransaction(0);
    }

    function test_Reverts_If_Approve_Transaction_Tx_Does_Not_Exist() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        multiSigWallet.submitTransaction(FUND_USER, FUND_AMOUNT, "");
        vm.prank(MULTISIG_OWNER_2);

        vm.expectRevert(MultiSigWallet.MSW__InvalidTxId.selector);
        multiSigWallet.approveTransaction(1);
    }

    function test_Reverts_If_Approve_Transaction_Already_Executed() public depositedAmount approvedTransaction {
        vm.prank(MULTISIG_OWNER_3);

        vm.expectRevert(MultiSigWallet.MSW__AlreadyExecuted.selector);
        multiSigWallet.approveTransaction(0);
    }

    function test_Revoke_Transaction() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        multiSigWallet.submitTransaction(FUND_USER, FUND_AMOUNT, "");

        vm.prank(MULTISIG_OWNER_2);
        multiSigWallet.approveTransaction(0);

        vm.prank(MULTISIG_OWNER_3);
        multiSigWallet.revokeTransaction(0);

        assertEq(multiSigWallet.getTransactionCount(), 1);

        (address destination, uint256 value, bytes memory data, bool executed, uint256 numApprovals) =
            multiSigWallet.getTransaction(0);

        assertEq(destination, FUND_USER);
        assertEq(value, FUND_AMOUNT);
        assertEq(data, "");
        assertEq(executed, false);
        assertEq(numApprovals, 0);
    }

    function test_Emit_Revoke_Transaction() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        multiSigWallet.submitTransaction(FUND_USER, FUND_AMOUNT, "");

        vm.prank(MULTISIG_OWNER_2);
        multiSigWallet.approveTransaction(0);

        vm.prank(MULTISIG_OWNER_3);
        vm.expectEmit(true, true, false, false);

        emit RevokeTransaction(0, MULTISIG_OWNER_3);
        multiSigWallet.revokeTransaction(0);
    }

    function test_Reverts_If_Revoke_Transaction_Executed_By_Non_Wallet_Owner() public depositedAmount {
        vm.prank(FUND_USER);
        vm.expectRevert(MultiSigWallet.MSW__Unauthorized.selector);
        multiSigWallet.revokeTransaction(0);
    }

    function test_Reverts_If_Revoke_Transaction_TxID_Does_Not_Exist() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        multiSigWallet.submitTransaction(FUND_USER, FUND_AMOUNT, "");
        vm.prank(MULTISIG_OWNER_2);

        vm.expectRevert(MultiSigWallet.MSW__InvalidTxId.selector);
        multiSigWallet.revokeTransaction(1);
    }

    function test_Reverts_If_Revoke_Transaction_Already_Executed() public depositedAmount approvedTransaction {
        vm.prank(MULTISIG_OWNER_3);

        vm.expectRevert(MultiSigWallet.MSW__AlreadyExecuted.selector);
        multiSigWallet.revokeTransaction(0);
    }

    function test_Get_Balance() public depositedAmount {
        assertEq(multiSigWallet.getBalance(), DEPOSIT_AMOUNT * 3);
    }

    function test_Is_Owner() public {
        assertEq(multiSigWallet.isOwner(MULTISIG_OWNER_1), true);
        assertEq(multiSigWallet.isOwner(MULTISIG_OWNER_2), true);
        assertEq(multiSigWallet.isOwner(MULTISIG_OWNER_3), true);
    }

    function test_Is_Not_Owner() public {
        assertEq(multiSigWallet.isOwner(FUND_USER), false);
    }

    function test_Get_Owners() public {
        address[] memory owners = multiSigWallet.getOwners();
        assertEq(owners.length, 3);
        assertEq(owners[0], MULTISIG_OWNER_1);
        assertEq(owners[1], MULTISIG_OWNER_2);
        assertEq(owners[2], MULTISIG_OWNER_3);
    }

    function test_Get_Owners_Length() public {
        assertEq(multiSigWallet.getOwnersCount(), 3);
    }

    function test_Get_numRequired() public {
        assertEq(multiSigWallet.getnumRequired(), 2);
    }

    function test_Get_Transaction_Count() public {
        assertEq(multiSigWallet.getTransactionCount(), 0);
    }

    function test_Get_Transaction_Is_Approved() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        multiSigWallet.submitTransaction(FUND_USER, FUND_AMOUNT, "");
        vm.prank(MULTISIG_OWNER_2);
        multiSigWallet.approveTransaction(0);
        vm.prank(MULTISIG_OWNER_3);
        multiSigWallet.approveTransaction(0);
        multiSigWallet.getApproved(0, MULTISIG_OWNER_3);

        assertEq(multiSigWallet.getApproved(0, MULTISIG_OWNER_3), true);
    }

    function test_Get_Transaction() public depositedAmount {
        vm.prank(MULTISIG_OWNER_1);
        multiSigWallet.submitTransaction(FUND_USER, FUND_AMOUNT, "");

        (address destination, uint256 value, bytes memory data, bool executed, uint256 numApprovals) =
            multiSigWallet.getTransaction(0);

        assertEq(destination, FUND_USER);
        assertEq(value, FUND_AMOUNT);
        assertEq(data, "");
        assertEq(executed, false);
        assertEq(numApprovals, 0);
    }
}

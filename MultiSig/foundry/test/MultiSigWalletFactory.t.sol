// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

import {Test, console} from "forge-std/Test.sol";
import {MultiSigWalletFactory} from "../src/MultiSigWalletFactory.sol";
import {HelperConfig} from "../script/HelperConfig.s.sol";
import {DeployMultiSigWalletFactory} from "../script/DeployMultiSigWalletFactory.s.sol";

contract MultiSigWalletFactoryTest is Test {
    MultiSigWalletFactory multiSigWalletFactory;
    HelperConfig helperConfig;

    event Create(address indexed wallet);

    error MSWF__InvalidIndex();
    error MSWF__SenderNotAnOwner();

    address public MULTISIG_OWNER_1 = address(0x90F79bf6EB2c4f870365E785982E1f101E93b906);
    address public MULTISIG_OWNER_2 = address(0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65);
    address public MULTISIG_OWNER_3 = address(0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc);
    address public MULTISIG_OWNER_4 = address(0x1804c8AB1F12E6bbf3894d4083f33e07309d1f38);
    address[] public OWNERS = [MULTISIG_OWNER_1, MULTISIG_OWNER_2, MULTISIG_OWNER_3, MULTISIG_OWNER_4];
    uint256 required = 3;

    function setUp() public {
        DeployMultiSigWalletFactory deployer = new DeployMultiSigWalletFactory();
        (multiSigWalletFactory, helperConfig) = deployer.run();
        (uint256 required,) = helperConfig.activeNetworkConfig();
    }

    function test_Create_Wallet() public {
        vm.startPrank(address(1));
        uint256 totalOwners = 3;
        uint256 required_ = 2;
        address[] memory owners_ = new address[](totalOwners);
        for (uint160 i; i < totalOwners; i++) {
            owners_[i] = address(i + 1);
        }

        multiSigWalletFactory.create(owners_, required_);
        vm.stopPrank();

        for (uint160 i = 1; i <= totalOwners; i++) {
            vm.startPrank(address(i));
            assertNotEq(multiSigWalletFactory.getWallet(0), address(0));
            assertEq(multiSigWalletFactory.getWalletCount(address(i)), 1);
            vm.stopPrank();
        }
    }

    function test_Emit_Create_Wallet() public {
        vm.startPrank(address(1));
        uint256 totalOwners = 3;
        uint256 required_ = 2;
        address[] memory owners_ = new address[](totalOwners);
        for (uint160 i; i < totalOwners; i++) {
            owners_[i] = address(i + 1);
        }

        vm.expectEmit(true, false, false, false);
        // MultiSigWallet address
        emit Create(address(0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968));
        multiSigWalletFactory.create(owners_, required_);
        vm.stopPrank();

        for (uint160 i = 1; i <= totalOwners; i++) {
            vm.startPrank(address(i));
            assertNotEq(multiSigWalletFactory.getWallet(0), address(0));
            assertEq(multiSigWalletFactory.getWalletCount(address(i)), 1);
            vm.stopPrank();
        }
    }

    function test_Reverts_If_Invalid_Index() public {
        vm.expectRevert(MultiSigWalletFactory.MSWF__InvalidIndex.selector);
        multiSigWalletFactory.getWallet(0);
    }

    function test_Reverts_If_Sender_Not_An_Owner() public {
        vm.expectRevert(MultiSigWalletFactory.MSWF__SenderNotAnOwner.selector);
        multiSigWalletFactory.create(OWNERS, required);
    }
}

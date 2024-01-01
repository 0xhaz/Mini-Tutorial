// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

import {Script, console} from "forge-std/Script.sol";
import {MultiSigWalletFactory} from "../src/MultiSigWalletFactory.sol";
import {DevOpsTools} from "lib/foundry-devops/src/DevOpsTools.sol";

contract CreateWallet is Script {
    uint256 _required = 3;
    // address[] public _owners = [
    //     0x90F79bf6EB2c4f870365E785982E1f101E93b906,
    //     0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65,
    //     0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc,
    //     //These are the default callers, generated using `address(uint160(uint256(keccak256("foundry default caller"))))`
    //     0x1804c8AB1F12E6bbf3894d4083f33e07309d1f38
    // ];

    address[] public _owners = [
        0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266,
        0x70997970C51812dc3A010C7d01b50e0d17dc79C8,
        0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
    ];

    function run() external {
        address contractAddress = DevOpsTools.get_most_recent_deployment("MultiSigWalletFactory", block.chainid);
        createWallet(contractAddress);
    }

    function createWallet(address _contractAddress) public {
        vm.startBroadcast();
        MultiSigWalletFactory(_contractAddress).create(_owners, _required);
        vm.stopBroadcast();
    }
}

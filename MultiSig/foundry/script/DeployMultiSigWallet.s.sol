// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

import {Script} from "forge-std/Script.sol";
import {MultiSigWallet} from "../src/MultiSigWallet.sol";
import {HelperConfig} from "./HelperConfig.s.sol";

contract DeployMultiSigWallet is Script {
    // local anvil address
    address[] public _owners = [
        0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266,
        0x70997970C51812dc3A010C7d01b50e0d17dc79C8,
        0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
    ];

    function run() external returns (MultiSigWallet, HelperConfig) {
        HelperConfig helperConfig = new HelperConfig();

        (uint256 required, uint256 deployerKey) = helperConfig.activeNetworkConfig();

        vm.startBroadcast(deployerKey);
        MultiSigWallet multiSigWallet = new MultiSigWallet(_owners, required);
        vm.stopBroadcast();
        return (multiSigWallet, helperConfig);
    }
}

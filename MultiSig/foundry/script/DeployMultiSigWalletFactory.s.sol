// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

import {Script, console} from "forge-std/Script.sol";
import {MultiSigWalletFactory} from "../src/MultiSigWalletFactory.sol";
import {HelperConfig} from "./HelperConfig.s.sol";
import {CreateWallet} from "./Interactions.s.sol";

contract DeployMultiSigWalletFactory is Script {
    function run() external returns (MultiSigWalletFactory, HelperConfig) {
        HelperConfig helperConfig = new HelperConfig();
        (, uint256 deployerKey) = helperConfig.activeNetworkConfig();
        vm.startBroadcast(deployerKey);
        MultiSigWalletFactory multiSigWalletFactory = new MultiSigWalletFactory();
        vm.stopBroadcast();
        CreateWallet createWallet = new CreateWallet();
        createWallet.createWallet(address(multiSigWalletFactory));
        return (multiSigWalletFactory, helperConfig);
    }
}

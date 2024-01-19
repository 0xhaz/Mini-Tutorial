// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.23;

import {Script, console} from "forge-std/Script.sol";
import {Staking} from "../src/Staking.sol";
import {HelperConfig} from "./HelperConfig.s.sol";
import {IPool} from "../src/interfaces/IPool.sol";
import {IWrappedTokenGatewayV3} from "../src/interfaces/IWrappedTokenGatewayV3.sol";

contract DeployStaking is Script {
    function run() external returns (Staking, HelperConfig) {
        HelperConfig helperConfig = new HelperConfig();

        (address lendingPoolAddress, address wethGatewayAddress, address aWethAddress, uint256 deployerKey) =
            helperConfig.activeNetworkConfig();

        vm.startBroadcast(deployerKey);
        Staking staking =
            new Staking(IPool(lendingPoolAddress), IWrappedTokenGatewayV3(wethGatewayAddress), aWethAddress);
        vm.stopBroadcast();
        return (staking, helperConfig);
    }
}

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.23;

import {Script, console} from "forge-std/Script.sol";
import {Staking} from "../src/Staking.sol";
import {Constants} from "../src/libraries/Constants.sol";

contract HelperConfig is Script {
    using Constants for address;

    struct NetworkConfig {
        address lendingPoolAddress;
        address wethGatewayAddress;
        address aWethAddress;
        uint256 deployerKey;
    }

    uint256 public constant DEFAULT_ANVIL_KEY = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;
    NetworkConfig public activeNetworkConfig;

    constructor() {
        if (block.chainid == 11155111) {
            activeNetworkConfig = getSepoliaConfig();
        } else {
            activeNetworkConfig = getAnvilConfig();
        }
    }

    function getSepoliaConfig() public view returns (NetworkConfig memory) {
        NetworkConfig memory config;
        config.lendingPoolAddress = Constants.sepoliaNetwork().LENDINGPOOL_ADDRESS;
        config.wethGatewayAddress = Constants.sepoliaNetwork().WETH_GATEWAY_ADDRESS;
        config.aWethAddress = Constants.sepoliaNetwork().AWETH_ADDRESS;

        return config = NetworkConfig({
            lendingPoolAddress: Constants.sepoliaNetwork().LENDINGPOOL_ADDRESS,
            wethGatewayAddress: Constants.sepoliaNetwork().WETH_GATEWAY_ADDRESS,
            aWethAddress: Constants.sepoliaNetwork().AWETH_ADDRESS,
            deployerKey: vm.envUint("SEPOLIA_PRIVATE_KEY")
        });
    }

    function getAnvilConfig() public pure returns (NetworkConfig memory) {
        NetworkConfig memory config;

        config.deployerKey = DEFAULT_ANVIL_KEY;

        return config;
    }
}

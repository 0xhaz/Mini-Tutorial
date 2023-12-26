// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

import {Script} from "forge-std/Script.sol";

contract HelperConfig is Script {
    struct NetworkConfig {
        bytes32 proposalName;
    }

    bytes32[] public proposals;

    uint256 public constant DEFAULT_ANVIL_KEY = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;
    NetworkConfig public activeNetworkConfig;

    constructor() {
        if (block.chainid == 11155111) {
            activeNetworkConfig = getSepoliaConfig();
        } else {
            activeNetworkConfig = getOrCreateAnvilEthConfig();
        }
    }

    function getSepoliaConfig() public view returns (NetworkConfig memory) {
        NetworkConfig memory config;
        for (uint256 i = 0; i < proposals.length; i++) {
            config = NetworkConfig({proposalName: proposals[i]});
        }
        return config;
    }

    function getOrCreateAnvilEthConfig() public view returns (NetworkConfig memory) {
        NetworkConfig memory config;
        for (uint256 i = 0; i < proposals.length; i++) {
            config = NetworkConfig({proposalName: proposals[i]});
        }
        return config;
    }
}

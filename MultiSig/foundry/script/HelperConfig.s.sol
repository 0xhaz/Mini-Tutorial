// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

import {Script, console} from "forge-std/Script.sol";
import {MultiSigWallet} from "../src/MultiSigWallet.sol";
import {MultiSigWalletFactory} from "../src/MultiSigWalletFactory.sol";

contract HelperConfig is Script {
    struct NetworkConfig {
        address[] owners;
        uint256 required;
        uint256 deployerKey;
    }

    uint256 public constant DEFAULT_ANVIL_KEY = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;
    NetworkConfig public activeNetworkConfig;
    address[] public owners;

    constructor() {
        if (block.chainid == 11155111) {
            activeNetworkConfig = getSepoliaConfig();
        } else {
            activeNetworkConfig = getAnvilConfig();
        }
    }

    function getSepoliaConfig() public view returns (NetworkConfig memory) {
        NetworkConfig memory config;
        address[] memory newOwners = new address[](owners.length);

        for (uint160 i; i < owners.length; i++) {
            newOwners[i] = owners[i];
        }

        return config = NetworkConfig({owners: newOwners, required: 2, deployerKey: vm.envUint("SEPOLIA_PRIVATE_KEY")});
    }

    function getAnvilConfig() public view returns (NetworkConfig memory) {
        NetworkConfig memory config;
        address[] memory newOwner = new address[](owners.length);

        for (uint160 i; i < owners.length; i++) {
            newOwner[i] = owners[i];
        }

        return config = NetworkConfig({owners: newOwner, required: 2, deployerKey: DEFAULT_ANVIL_KEY});
    }
}

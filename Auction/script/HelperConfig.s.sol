// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

import {Script, console} from "forge-std/Script.sol";
import {Auction} from "../src/Auction.sol";

contract HelperConfig is Script {
    struct NetworkConfig {
        address payable beneficiary;
        uint256 biddingTime;
        uint256 deployerKey;
    }

    uint256 public constant DEFAULT_ANVIL_KEY = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;
    NetworkConfig public activeNetworkConfig;

    constructor() {
        if (block.chainid == 11155111) {
            activeNetworkConfig = getSepoliaConfig();
        } else {
            activeNetworkConfig = getOrCreateAnvilEthConfig();
        }
    }

    function getSepoliaConfig() public returns (NetworkConfig memory) {
        vm.startBroadcast();
        Auction auction = new Auction(60 seconds, payable(vm.envAddress("SEPOLIA_ADDRESS")));
        vm.stopBroadcast();
        return NetworkConfig({
            beneficiary: payable(vm.envAddress("SEPOLIA_ADDRESS")),
            biddingTime: 60 seconds,
            deployerKey: vm.envUint("SEPOLIA_PRIVATE_KEY")
        });
    }

    function getOrCreateAnvilEthConfig() public view returns (NetworkConfig memory) {
        return NetworkConfig({
            beneficiary: payable(vm.envAddress("ANVIL_ADDRESS")),
            biddingTime: 60 seconds,
            deployerKey: DEFAULT_ANVIL_KEY
        });
    }
}

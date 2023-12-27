// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

import {Script} from "forge-std/Script.sol";
import {Auction} from "../src/Auction.sol";
import {HelperConfig} from "./HelperConfig.s.sol";

contract DeployAuction is Script {
    function run() external returns (Auction, HelperConfig) {
        HelperConfig helperConfig = new HelperConfig();
        (address payable beneficiary, uint256 biddingTime, uint256 deployerKey) = helperConfig.activeNetworkConfig();
        Auction auction = new Auction(biddingTime, beneficiary);
        return (auction, helperConfig);
    }
}

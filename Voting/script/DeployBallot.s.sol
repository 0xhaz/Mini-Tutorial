// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

import {Script} from "forge-std/Script.sol";
import {Ballot} from "../src/Ballot.sol";
import {HelperConfig} from "./HelperConfig.s.sol";

contract DeployBallot is Script {
    bytes32[] public proposalName = [bytes32("proposal1"), bytes32("proposal2")];

    function run() public returns (Ballot, HelperConfig) {
        HelperConfig helperConfig = new HelperConfig();
        helperConfig.activeNetworkConfig();
        vm.startBroadcast();
        Ballot ballot = new Ballot(proposalName);
        vm.stopBroadcast();
        return (ballot, helperConfig);
    }
}

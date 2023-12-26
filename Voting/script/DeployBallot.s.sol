// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

import {Script} from "forge-std/Script.sol";
import {Ballot} from "../src/Ballot.sol";
import {HelperConfig} from "./HelperConfig.s.sol";

contract DeployBallot is Script {
    Ballot public proposal;

    bytes32[] public proposals = [bytes32("proposal1"), bytes32("proposal2")];

    function run() public returns (Ballot, HelperConfig) {
        HelperConfig helperConfig = new HelperConfig();
        vm.startBroadcast();
        proposal = new Ballot(proposals);
        vm.stopBroadcast();
        return (proposal, helperConfig);
    }
}

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

import {Test, console} from "forge-std/Test.sol";
import {DeployBallot} from "script/DeployBallot.s.sol";
import {Ballot} from "src/Ballot.sol";
import {HelperConfig} from "script/HelperConfig.s.sol";

contract BallotTest is Test {
    DeployBallot public deployer;
    Ballot public proposal;

    function setUp() public {}
}

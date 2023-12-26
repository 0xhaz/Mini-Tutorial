// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

import {Test, console} from "forge-std/Test.sol";
import {DeployBallot} from "script/DeployBallot.s.sol";
import {Ballot} from "src/Ballot.sol";
import {HelperConfig} from "script/HelperConfig.s.sol";

contract BallotTest is Test {
    Ballot ballot;
    HelperConfig helperConfig;

    bytes32[] public proposalName = [bytes32("proposal1"), bytes32("proposal2")];

    address public voter1 = makeAddr("voter1");
    address public voter2 = makeAddr("voter2");
    bytes32 public proposal1 = bytes32("proposal1");
    bytes32 public proposal2 = bytes32("proposal2");

    function setUp() public {
        DeployBallot deployer = new DeployBallot();
        (ballot, helperConfig) = deployer.run();
    }

    function test_Chairperson() public {
        assertEq(ballot.s_chairperson(), msg.sender);
    }

    function test_Give_Right_To_Vote() public {
        vm.startPrank(msg.sender);
        ballot.giveRightToVote(voter1);
        vm.stopPrank();

        assertEq(ballot.getVoterWeight(voter1), 1);
    }

    function test_Reverts_If_Give_Right_To_Vote_Is_Not_Chairperson() public {
        vm.startPrank(voter1);
        vm.expectRevert(Ballot.Ballot__NotChairperson.selector);
        ballot.giveRightToVote(voter1);
        vm.stopPrank();
    }

    function test_Reverts_If_Voters_Has_Weight() public {
        vm.startPrank(msg.sender);
        ballot.giveRightToVote(voter1);
        vm.stopPrank();

        vm.startPrank(msg.sender);
        vm.expectRevert(Ballot.Ballot__AlreadyHasWeight.selector);
        ballot.giveRightToVote(voter1);
        vm.stopPrank();
    }

    function test_Reverts_If_Voters_Has_Voted() public {
        vm.startPrank(msg.sender);
        ballot.giveRightToVote(voter1);
        vm.stopPrank();

        vm.startPrank(voter1);
        ballot.vote(0);
        vm.expectRevert(Ballot.Ballot__AlreadyVoted.selector);
        ballot.vote(0);
        vm.stopPrank();
    }

    function test_Voted_Proposal() public {
        vm.startPrank(msg.sender);
        ballot.giveRightToVote(voter1);
        vm.stopPrank();

        vm.startPrank(voter1);
        ballot.vote(0);
        vm.stopPrank();

        assertEq(ballot.getVoterVote(voter1), 0);
        assertEq(ballot.getVoterVoted(voter1), true);
        assertEq(ballot.getProposalVoteCount(0), 1);
        assertEq(ballot.getProposalVoteCount(1), 0);
        assertEq(ballot.winningProposal(), 0);
        assertEq(ballot.winnerName(), proposal1);
    }

    function test_Delegate_Vote() public {
        vm.startPrank(msg.sender);
        ballot.giveRightToVote(voter1);
        ballot.giveRightToVote(voter2);
        vm.stopPrank();

        vm.startPrank(voter1);
        ballot.delegateVote(voter2);
        vm.stopPrank();

        assertEq(ballot.getVoterDelegate(voter1), voter2);
        assertEq(ballot.getVoterWeight(voter1), 1);
        assertEq(ballot.getVoterWeight(voter2), 2);
    }

    function test_Proposals_Entered() public {
        assertEq(ballot.getProposalIndex(proposalName[0]), 0);
        assertEq(ballot.getProposalIndex(proposalName[1]), 1);
    }

    function test_Proposals_Name_Is_Correct() public {
        assertEq(ballot.getProposalName(0), proposal1);
        assertEq(ballot.getProposalName(1), proposal2);
    }
}

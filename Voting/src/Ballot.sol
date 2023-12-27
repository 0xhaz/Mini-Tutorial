// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

contract Ballot {
    error Ballot__AlreadyVoted();
    error Ballot__AlreadyHasWeight();
    error Ballot__NotChairperson();
    error Ballot__AlreadyDelegate();

    struct Voter {
        uint256 weight; // weight is accumulated by delegation
        bool voted; // if true, that person already voted
        address delegate; // person delegated to
        uint256 vote; // index of the voted proposal
    }

    struct Proposal {
        bytes32 name; // short name (up to 32 bytes)
        uint256 voteCount; // number of accumulated votes
    }

    address public s_chairperson;

    // This declares a state variable that
    // stores a `Voter` struct for each possible address.
    mapping(address => Voter) public s_voters;

    // A dynamically-sized array of `Proposal` structs.
    Proposal[] public s_proposals;

    /// Create a new ballot to choose one of `proposalNames`.
    constructor(bytes32[] memory proposalNames) {
        s_chairperson = msg.sender;
        s_voters[s_chairperson].weight = 1;

        // For each of the provided proposal names,
        // create a new proposal object and add it
        // to the end of the array.
        for (uint256 i = 0; i < proposalNames.length; i++) {
            // `Proposal({...})` creates a temporary
            // Proposal object and `proposals.push(...)`
            // appends it to the end of `proposals`.
            s_proposals.push(Proposal({name: proposalNames[i], voteCount: 0}));
        }
    }

    // Give `voter` the right to vote on this ballot.
    // May only be called by `chairperson`.
    function giveRightToVote(address voter) external {
        if (s_voters[voter].weight != 0) revert Ballot__AlreadyHasWeight();
        if (s_chairperson != msg.sender) revert Ballot__NotChairperson();
        if (s_voters[voter].voted) revert Ballot__AlreadyVoted();
        s_voters[voter].weight = 1;
    }

    /// Delegate your vote to the voter `to`.
    function delegateVote(address to) external {
        Voter storage sender = s_voters[msg.sender];
        if (sender.voted) revert Ballot__AlreadyVoted();
        if (sender.weight == 0) revert Ballot__AlreadyHasWeight();
        if (to == msg.sender) revert Ballot__AlreadyDelegate();

        while (s_voters[to].delegate != address(0)) {
            to = s_voters[to].delegate;

            // We found a loop in the delegation, not allowed.
            if (to == msg.sender) revert Ballot__AlreadyDelegate();
        }

        Voter storage delegateTo = s_voters[to];
        require(delegateTo.weight >= 1);

        sender.voted = true;
        sender.delegate = to;

        if (delegateTo.voted) {
            s_proposals[delegateTo.vote].voteCount += sender.weight;
        } else {
            delegateTo.weight += sender.weight;
        }
    }

    function vote(uint256 proposal) external {
        Voter storage sender = s_voters[msg.sender];
        if (sender.voted) revert Ballot__AlreadyVoted();
        if (sender.weight == 0) revert Ballot__AlreadyHasWeight();
        sender.voted = true;
        sender.vote = proposal;

        // If `proposal` is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        s_proposals[proposal].voteCount += sender.weight;
    }

    function winningProposal() public view returns (uint256 winningProposal_) {
        uint256 winningVoteCount = 0;
        for (uint256 p = 0; p < s_proposals.length; p++) {
            if (s_proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = s_proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    function winnerName() external view returns (bytes32 winnerName_) {
        winnerName_ = s_proposals[winningProposal()].name;
    }

    function getProposalName(uint256 index) external view returns (bytes32) {
        return s_proposals[index].name;
    }

    function getProposalVoteCount(uint256 index) external view returns (uint256) {
        return s_proposals[index].voteCount;
    }

    function getVoterWeight(address voter) external view returns (uint256) {
        return s_voters[voter].weight;
    }

    function getVoterVoted(address voter) external view returns (bool) {
        return s_voters[voter].voted;
    }

    function getVoterDelegate(address voter) external view returns (address) {
        return s_voters[voter].delegate;
    }

    function getVoterVote(address voter) external view returns (uint256) {
        return s_voters[voter].vote;
    }

    function getProposalIndex(bytes32 proposalName) external view returns (uint256) {
        for (uint256 i = 0; i < s_proposals.length; i++) {
            if (s_proposals[i].name == proposalName) {
                return i;
            }
        }
        return 0;
    }
}

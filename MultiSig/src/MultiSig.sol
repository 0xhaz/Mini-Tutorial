// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

contract MultiSig {
    error MultiSig__MultiSigNoOwners();
    error MultiSig__MultiSigRequiredIsZero();
    error MultiSig__MultiSigRequiredIsGreaterThanOwners();

    address[] public s_owners;
    uint256 public s_required;

    constructor(address[] memory owners, uint256 required) {
        if (owners.length == 0) revert MultiSig__MultiSigNoOwners();
        if (required == 0) revert MultiSig__MultiSigRequiredIsZero();
        if (required >= owners.length) revert MultiSig__MultiSigRequiredIsGreaterThanOwners();
        s_owners = owners;
        s_required = required;
    }
}

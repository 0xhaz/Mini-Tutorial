// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

contract MultiSig {
    error MultiSig__MultiSigNoOwners();
    error MultiSig__MultiSigRequiredIsZero();
    error MultiSig__MultiSigRequiredIsGreaterThanOwners();
    error MultiSig__MultiSigNotOwner();

    address[] public s_owners;
    uint256 public s_required;
    uint256 public transactionCount;

    struct Transaction {
        address destination; // Transaction destination address
        uint256 value; // Transaction ether value in wei
        bool executed; // Whether transaction is already executed or not
        bytes data; // Transaction data payload
    }

    // Mapping of all transaction IDs to their respective transaction structs
    mapping(uint256 => Transaction) public s_transactions;
    // Mapping of all transaction IDs to the number of confirmations
    mapping(uint256 => mapping(address => bool)) public s_confirmations;

    constructor(address[] memory _owners, uint256 _required) {
        if (_owners.length == 0) revert MultiSig__MultiSigNoOwners();
        if (_required == 0) revert MultiSig__MultiSigRequiredIsZero();
        if (_required >= _owners.length) revert MultiSig__MultiSigRequiredIsGreaterThanOwners();
        s_owners = _owners;
        s_required = _required;
    }

    receive() external payable {}

    function confirmTransaction(uint256 transactionId) public {
        if (!_onlyOwner(msg.sender)) revert MultiSig__MultiSigNotOwner();
        s_confirmations[transactionId][msg.sender] = true;
        if (isConfirmed(transactionId)) {
            executeTransaction(transactionId);
        }
    }

    function executeTransaction(uint256 transactionId) public {
        if (isConfirmed(transactionId)) {
            Transaction storage transaction = s_transactions[transactionId];
            if (!transaction.executed) {
                transaction.executed = true;
                (bool success,) = transaction.destination.call{value: transaction.value}(transaction.data);
                if (!success) {
                    transaction.executed = false;
                }
            }
        }
    }

    function submitTransaction(address _destination, uint256 _value, bytes memory _data)
        external
        returns (uint256 transactionId)
    {
        transactionId = _addTransaction(_destination, _value, _data);
        confirmTransaction(transactionId);
    }

    function getTransactionConfirmationsCount(uint256 transactionId) public view returns (uint256 count) {
        for (uint256 i = 0; i < s_owners.length; i++) {
            if (s_confirmations[transactionId][s_owners[i]]) {
                count += 1;
            }
        }
    }

    function isConfirmed(uint256 transactionId) public view returns (bool) {
        return getTransactionConfirmationsCount(transactionId) >= s_required;
    }

    function _onlyOwner(address _owner) private view returns (bool) {
        for (uint256 i = 0; i < s_owners.length; i++) {
            if (s_owners[i] == _owner) {
                return true;
            }
        }
        return false;
    }

    function _addTransaction(address _destination, uint256 _value, bytes memory _data) internal returns (uint256) {
        s_transactions[transactionCount] =
            Transaction({destination: _destination, value: _value, data: _data, executed: false});
        transactionCount += 1;
        return transactionCount - 1;
    }
}

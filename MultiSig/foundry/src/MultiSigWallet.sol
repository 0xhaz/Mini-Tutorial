// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

contract MultiSigWallet {
    error MSW__NoOwners();
    error MSW__OwnerNotUnique(address owner);
    error MSW__Unauthorized();
    error MSW__InvalidRequiredOwners();
    error MSW__InvalidAddressZeroOwner();
    error MSW__InvalidTxId();
    error MSW__AlreadyApproved();
    error MSW__NotApproved();
    error MSW__AlreadyExecuted();
    error MSW__NotEnoughApprovals();
    error MSW__TxFailed();
    error MSW__NotEnoughFunds();

    address[] private s_owners;
    uint256 private s_required;
    uint256 private s_transactionCount;

    event Deposit(address indexed sender, uint256 value, uint256 balance);
    event SubmitTransaction(
        uint256 indexed txId, address indexed owner, address indexed destination, uint256 value, bytes data
    );
    event ApproveTransaction(uint256 indexed txId, address indexed owner);
    event ExecuteTransaction(uint256 indexed txId, address indexed destination, uint256 value, bytes data);
    event RevokeTransaction(uint256 indexed txId, address indexed owner);
    event Withdraw(uint256 amount, address indexed recipient);

    struct Transaction {
        address destination;
        uint256 value;
        bytes data;
        bool executed;
        uint256 numApprovals;
        mapping(address => bool) isApproved;
    }

    mapping(address => bool) private s_isOwner;
    mapping(uint256 => Transaction) private s_transactions;

    modifier onlyOwner() {
        if (!s_isOwner[msg.sender]) revert MSW__Unauthorized();
        _;
    }

    modifier txExists(uint256 _txId) {
        if (s_transactions[_txId].destination == address(0)) revert MSW__InvalidTxId();
        _;
    }

    modifier notExecuted(uint256 _txId) {
        if (s_transactions[_txId].executed) revert MSW__AlreadyExecuted();
        _;
    }

    modifier notApproved(uint256 _txId) {
        if (s_transactions[_txId].isApproved[msg.sender]) revert MSW__AlreadyApproved();
        _;
    }

    modifier notNull(address _address) {
        if (_address == address(0)) revert MSW__InvalidAddressZeroOwner();
        _;
    }

    constructor(address[] memory _owners, uint256 _required) {
        if (_owners.length == 0) revert MSW__NoOwners();
        if (_required < 1 || _required > _owners.length) revert MSW__InvalidRequiredOwners();

        for (uint256 i = 0; i < _owners.length; i++) {
            address owner = _owners[i];

            if (s_isOwner[owner]) revert MSW__OwnerNotUnique(owner);
            if (owner == address(0)) revert MSW__InvalidAddressZeroOwner();

            s_owners.push(owner);
            s_isOwner[owner] = true;
        }

        s_required = _required;
    }

    receive() external payable {
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }

    function deposit() external payable {
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }

    function withdraw(uint256 _amount) external onlyOwner {
        if (_amount > address(this).balance) revert MSW__NotEnoughFunds();

        (bool success,) = msg.sender.call{value: _amount}("");
        if (!success) revert MSW__TxFailed();
    }

    function submitTransaction(address _to, uint256 _value, bytes calldata _data) external onlyOwner {
        Transaction storage transaction = s_transactions[s_transactionCount];

        if (_value > address(this).balance) revert MSW__NotEnoughFunds();

        transaction.destination = _to;
        transaction.value = _value;
        transaction.data = _data;
        transaction.executed = false;
        transaction.numApprovals = 0;

        s_transactionCount++;

        emit SubmitTransaction(s_transactionCount - 1, msg.sender, _to, _value, _data);
    }

    function approveTransaction(uint256 _txId)
        external
        onlyOwner
        txExists(_txId)
        notExecuted(_txId)
        notApproved(_txId)
    {
        Transaction storage transaction = s_transactions[_txId];

        transaction.isApproved[msg.sender] = true;
        transaction.numApprovals++;

        emit ApproveTransaction(_txId, msg.sender);

        if (transaction.numApprovals >= s_required) {
            _executeTransaction(_txId);
        }
    }

    function revokeTransaction(uint256 _txId)
        external
        onlyOwner
        txExists(_txId)
        notExecuted(_txId)
        notApproved(_txId)
    {
        Transaction storage transaction = s_transactions[_txId];

        transaction.isApproved[msg.sender] = false;
        transaction.numApprovals--;

        emit RevokeTransaction(_txId, msg.sender);
    }

    function _executeTransaction(uint256 _txId) private notExecuted(_txId) {
        Transaction storage transaction = s_transactions[_txId];

        transaction.executed = true;

        // transfer funds from contract to destination
        (bool success,) = transaction.destination.call{value: transaction.value}(transaction.data);
        if (!success) revert MSW__TxFailed();

        emit ExecuteTransaction(_txId, transaction.destination, transaction.value, transaction.data);
    }

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function isOwner(address _owner) external view returns (bool) {
        return s_isOwner[_owner];
    }

    function getOwners() external view returns (address[] memory) {
        return s_owners;
    }

    function getnumRequired() external view returns (uint256) {
        return s_required;
    }

    function getTransactionCount() external view returns (uint256) {
        return s_transactionCount;
    }

    function getTransaction(uint256 _txId)
        external
        view
        returns (address destination, uint256 value, bytes memory data, bool executed, uint256 numApprovals)
    {
        Transaction storage transaction = s_transactions[_txId];

        return (
            transaction.destination, transaction.value, transaction.data, transaction.executed, transaction.numApprovals
        );
    }
}

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

import {MultiSigWallet} from "./MultiSigWallet.sol";

contract MultiSigWalletFactory {
    error MSWF__InvalidIndex();
    error MSWF__SenderNotAnOwner();

    event Create(address indexed wallet);

    mapping(address => MultiSigWallet[]) internal _ownerToMultiSigWallets;
    mapping(address => uint256) private s_walletCounts;

    modifier validIndex(uint256 _index) {
        if (_index >= s_walletCounts[msg.sender]) revert MSWF__InvalidIndex();
        _;
    }

    function create(address[] memory _owners, uint256 _required) external {
        MultiSigWallet multiSigWallet = new MultiSigWallet(_owners, _required);
        bool msgSenderIsAnOwner;

        for (uint256 i; i < _owners.length; i++) {
            _ownerToMultiSigWallets[_owners[i]].push(multiSigWallet);
            s_walletCounts[_owners[i]]++;

            if (_owners[i] == msg.sender) {
                msgSenderIsAnOwner = true;
            }
        }

        if (!msgSenderIsAnOwner) {
            revert MSWF__SenderNotAnOwner();
        }

        emit Create(address(multiSigWallet));
    }

    function getWalletsByOwner(uint256 _index) external view validIndex(_index) returns (address) {
        MultiSigWallet[] storage wallets = _ownerToMultiSigWallets[msg.sender];
        return address(wallets[_index]);
    }
}

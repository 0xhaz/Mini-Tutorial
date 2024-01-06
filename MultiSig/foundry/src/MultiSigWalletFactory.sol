// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

import {MultiSigWallet} from "./MultiSigWallet.sol";
import {console} from "forge-std/Console.sol";

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
            // console.log("owner: %s", _owners[i]);
            _ownerToMultiSigWallets[_owners[i]].push(multiSigWallet);
            s_walletCounts[_owners[i]]++;

            if (_owners[i] == msg.sender) {
                msgSenderIsAnOwner = true;
            }
        }
        console.log("msg.sender: %s", msg.sender);

        if (!msgSenderIsAnOwner) {
            revert MSWF__SenderNotAnOwner();
        }

        emit Create(address(multiSigWallet));
    }

    function getWallet(uint256 _index) external view validIndex(_index) returns (address) {
        MultiSigWallet[] storage multiSigWallet = _ownerToMultiSigWallets[msg.sender];
        return address(multiSigWallet[_index]);
    }

    function getWalletCount(address _owner) external view returns (uint256) {
        return s_walletCounts[_owner];
    }
}

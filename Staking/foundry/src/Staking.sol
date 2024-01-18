// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.23;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IPool} from "./interfaces/IPool.sol";
import {IWrappedTokenGatewayV3} from "./interfaces/IWrappedTokenGatewayV3.sol";

/**
 * @title Staking Yield from AaveV3
 * @notice This contract is for creating a DeFi ETH staking dapp to generate yield from AaveV3
 * @dev This contract implements 3 different staking periods with different APYs
 * @dev This contract integrate with AaveV3 to lend for passive income generation
 * @dev The contract implements WETH Gateway to convert ETH to WETH and deposit to AaveV3
 */

contract Staking {
    // AaveV3 Lending Pool Address
    IPool private s_lendingPoolAddress;

    // WETH Gateway Address
    IWrappedTokenGatewayV3 private s_wethGatewayAddress;

    // Lending Pool address for the AaveV3 lending pool on Goerli
}

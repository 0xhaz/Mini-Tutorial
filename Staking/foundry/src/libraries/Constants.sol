// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.23;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IPool} from "../interfaces/IPool.sol";
import {IWrappedTokenGatewayV3} from "../interfaces/IWrappedTokenGatewayV3.sol";

library Constants {
    struct ExternalAddresses {
        address LENDINGPOOL_ADDRESS;
        address WETH_GATEWAY_ADDRESS;
        address AWETH_ADDRESS;
    }

    function goerliNetwork() internal pure returns (ExternalAddresses memory) {
        return ExternalAddresses({
            LENDINGPOOL_ADDRESS: 0x4bd5643ac6f66a5237E18bfA7d47cF22f1c9F210,
            WETH_GATEWAY_ADDRESS: 0x3bd3a20Ac9Ff1dda1D99C0dFCE6D65C4960B3627,
            AWETH_ADDRESS: 0x87b1f4cf9BD63f7BBD3eE1aD04E8F52540349347
        });
    }

    function sepoliaNetwork() internal pure returns (ExternalAddresses memory) {
        return ExternalAddresses({
            LENDINGPOOL_ADDRESS: 0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951,
            WETH_GATEWAY_ADDRESS: 0x387d311e47e80b498169e6fb51d3193167d89F7D,
            AWETH_ADDRESS: 0x5b071b590a59395fE4025A0Ccc1FcC931AAc1830
        });
    }
}

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.23;

library InterestRates {
    /**
     * @dev Calculates the interest rate for a given amount of wei
     * @notice basisPoints The basis points of the interest rate
     * @notice numDays The number of days to calculate the interest rate for
     * @param weiAmount The amount of wei to calculate the interest rate for
     * @return interest The interest rate for the wei amount
     */
    function calculateInterest(uint256 basisPoints, uint256 numDays, uint256 weiAmount)
        internal
        pure
        returns (uint256 interest)
    {
        return basisPoints * weiAmount / 10000;
    }
}

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

contract Auction {
    // Errors that describe failures.
    //  The auction has already ended.
    error Auction__AuctionAlreadyEnded();
    //  There is already a higher or equal bid.
    error Auction__BidNotHighEnough(uint256 highestBid);
    //  The auction has not ended yet.
    error Auction__AuctionNotYetEnded();
    //  The function auctionEnd has already been called.
    error Auction__auctionEndAlreadyCalled();

    address payable public s_beneficiary;
    uint256 public s_auctionEndTime;

    // Current state of the auction.
    uint256 public s_highestBid;
    address payable public s_highestBidder;

    // Allowed withdrawals of previous bids
    mapping(address => uint256) public s_pendingReturns;

    // Set to true at the end, disallows any change.
    // By default initialized to `false`.
    bool public ended;

    // Events that will be emitted on changes.
    event HighestBidIncreased(address bidder, uint256 amount);
    event AuctionEnded(address winner, uint256 amount);

    constructor(uint256 _biddingTime, address payable _beneficiary) {
        s_beneficiary = _beneficiary;
        s_auctionEndTime = block.timestamp + _biddingTime;
    }

    /**
     * Bid on the auction with the value sent together with this transaction.
     * The value will only be refunded if the auction is not won.
     */

    function bid() external payable {
        if (block.timestamp > s_auctionEndTime) revert Auction__AuctionAlreadyEnded();
        if (msg.value <= s_highestBid) revert Auction__BidNotHighEnough(s_highestBid);

        if (s_highestBid != 0) {
            s_pendingReturns[s_highestBidder] += s_highestBid;
        }

        s_highestBidder = payable(msg.sender);
        s_highestBid = msg.value;

        emit HighestBidIncreased(msg.sender, msg.value);
    }

    /**
     * Withdraw a bid that was overbid.
     * Returns bool: true on success, false otherwise.
     * It is important to not provide for this function, i.e. to let
     * anyone withdraw from the Auction. One could introduce a
     * withdraw function that is only callable by the highest bidder,
     * but that would introduce a wealth threshold at which the
     * withdrawal is possible. It is thus recommended to let anyone
     * withdraw, and to return the success status of the operation
     * instead.
     */

    function withdraw() external returns (bool) {
        uint256 amount = s_pendingReturns[msg.sender];

        if (amount > 0) {
            s_pendingReturns[msg.sender] = 0;

            if (!payable(msg.sender).send(amount)) {
                s_pendingReturns[msg.sender] = amount;
                return false;
            }
        }
        return true;
    }

    function auctionEnd() external {
        if (block.timestamp < s_auctionEndTime) revert Auction__AuctionNotYetEnded();
        if (ended) revert Auction__auctionEndAlreadyCalled();

        ended = true;
        emit AuctionEnded(s_highestBidder, s_highestBid);

        s_beneficiary.transfer(s_highestBid);
    }

    function getReturnAmount() external view returns (uint256) {
        return s_pendingReturns[msg.sender];
    }
}

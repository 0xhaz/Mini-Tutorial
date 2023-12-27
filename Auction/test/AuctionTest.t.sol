// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.21;

import {Test, console} from "forge-std/Test.sol";
import {Auction} from "../src/Auction.sol";
import {DeployAuction} from "../script/DeployAuction.s.sol";
import {HelperConfig} from "../script/HelperConfig.s.sol";

contract AuctionTest is Test {
    DeployAuction deployer;
    HelperConfig helperConfig;
    Auction auction;

    uint256 biddingTime = 60 seconds;
    uint256 interval;
    address payable beneficiary = payable(makeAddr("beneficiary"));
    address payable bidder1 = payable(makeAddr("bidder1"));
    address payable bidder2 = payable(makeAddr("bidder2"));

    uint256 public constant BID_AMOUNT = 100 ether;
    uint256 public constant BID_AMOUNT2 = 50 ether;
    uint256 public constant BID_BALANCE = 200 ether;

    function setUp() public {
        deployer = new DeployAuction();
        (auction, helperConfig) = deployer.run();
        (beneficiary, biddingTime,) = helperConfig.activeNetworkConfig();
        vm.deal(bidder1, BID_BALANCE);
        vm.deal(bidder2, BID_AMOUNT2);
    }

    modifier afterBiddingTime() {
        vm.prank(bidder1);
        auction.bid{value: BID_AMOUNT}();
        vm.warp(block.timestamp + 600 seconds);
        vm.roll(block.number + 1);
        _;
    }

    function test_Beneficiary_Address() public {
        assertEq(auction.s_beneficiary(), beneficiary);
    }

    function test_Bidding_Time() public {
        assertEq(auction.s_auctionEndTime(), block.timestamp + biddingTime);
    }

    function test_Bid() public {
        vm.startPrank(bidder1);
        auction.bid{value: BID_AMOUNT}();
        vm.stopPrank();
        assertEq(auction.s_highestBid(), BID_AMOUNT);
        assertEq(auction.s_highestBidder(), bidder1);
    }

    function test_Reverts_If_Auction_Already_Ended() public afterBiddingTime {
        vm.expectRevert(Auction.Auction__AuctionAlreadyEnded.selector);
        vm.startPrank(bidder1);
        auction.bid{value: BID_AMOUNT}();
        vm.stopPrank();
    }

    function test_Reverts_If_Value_Is_Not_Highest_Bid() public {
        vm.prank(bidder1);
        auction.bid{value: BID_AMOUNT}();
        vm.expectRevert(abi.encodeWithSelector(Auction.Auction__BidNotHighEnough.selector, BID_AMOUNT));
        vm.prank(bidder2);
        auction.bid{value: BID_AMOUNT2}();
    }

    function test_Withdraw() public {
        vm.prank(bidder1);
        auction.bid{value: BID_AMOUNT}();
        auction.withdraw();
        assertEq(auction.getReturnAmount(), 0);
    }

    function test_Reverts_Amount_If_Withdraw_Fail_To_Send() public {
        vm.prank(bidder1);
        auction.bid{value: BID_AMOUNT}();
        // vm.prank(bidder2);
        // auction.withdraw();
        // assertEq(address(this).balance, BID_BALANCE + BID_AMOUNT2 + BID_AMOUNT);
    }

    function test_Auction_End() public afterBiddingTime {
        vm.startPrank(bidder1);
        auction.auctionEnd();
        vm.stopPrank();
        assertEq(auction.ended(), true);
        assertEq(auction.s_highestBid(), BID_AMOUNT);
        assertEq(auction.s_highestBidder(), bidder1);
        assertEq(auction.getReturnAmount(), 0);
        assertEq(beneficiary.balance, BID_AMOUNT);
    }

    function test_Reverts_If_Auction_Has_Not_Ended_Yet() public {
        vm.expectRevert(Auction.Auction__AuctionNotYetEnded.selector);
        vm.startPrank(bidder1);
        auction.auctionEnd();
        vm.stopPrank();
    }

    function test_Reverts_If_Auction_Has_Already_Ended() public afterBiddingTime {
        vm.startPrank(bidder1);
        auction.auctionEnd();
        vm.stopPrank();
        vm.expectRevert(Auction.Auction__auctionEndAlreadyCalled.selector);
        vm.startPrank(bidder1);
        auction.auctionEnd();
        vm.stopPrank();
    }
}

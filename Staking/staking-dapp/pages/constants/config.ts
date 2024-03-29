export const STAKING_ADDRESS = "0x1be9c2b488f8701Cb93CCb18544293756835355C";

import { abi as StakingABI } from "../abi/StakingABI.json";

export const STAKING_ABI = StakingABI;

// Array of objects with the following properties:
// 30 days is 7% APY
// 90 days is 10% APY
// 365 days is 15% APY

export const STAKING_PERIODS = [
  {
    id: 30,
    name: "30 days",
    apy: 7,
  },
  {
    id: 90,
    name: "90 days",
    apy: 10,
  },
  {
    id: 365,
    name: "365 days",
    apy: 15,
  },
];

export const ASSETS_STAKED = [
  {
    id: 1,
    name: "ETH",
    percentInterest: 7,
    etherStaked: 1,
    etherInterest: 0.07,
    daysRemaining: 30,
  },
];

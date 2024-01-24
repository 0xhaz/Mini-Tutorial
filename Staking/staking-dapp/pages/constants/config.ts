export const STAKING_ADDRESS = "0xB8AAf593fc562ef953F0C8651545c45d698d7718";

import { abi as StakingABI } from "../abi/StakingABI.json";

export const STAKING_ABI = StakingABI;

// Array of objects with the following properties:
// 30 days is 7% APY
// 90 days is 10% APY
// 365 days is 15% APY

export const STAKING_PERIODS = [
  {
    id: 1,
    name: "30 days",
    apy: 7,
  },
  {
    id: 2,
    name: "90 days",
    apy: 10,
  },
  {
    id: 3,
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

import {
  fetchBalance,
  readContract,
  readContracts,
  writeContract,
} from "@wagmi/core";
import { STAKING_ABI, STAKING_ADDRESS } from "../constants/config";

export const getBalance = async (walletAddress: `0x${string}`) => {
  return await fetchBalance({ address: walletAddress, formatUnits: "ether" });
};

export const stakeEther = async (
  walletAddress: `0x${string}`,
  amount: number
) => {
  if (walletAddress === undefined) return;

  const stakingContract = {
    address: STAKING_ADDRESS as `0x${string}`,
    abi: STAKING_ABI,
  };

  const tx = await writeContract({
    ...stakingContract,
    functionName: "stakeEther",
    args: [BigInt(amount)],
  });

  return tx;
};

export const getAssets = async (
  positionId: number,
  walletAddress: `0x${string}`,
  account: `0x${string}`
) => {
  if (walletAddress === undefined) return;

  const stakingContract = {
    address: STAKING_ADDRESS as `0x${string}`,
    abi: STAKING_ABI,
  };

  if (positionId < 1) return [];

  const batchReadCalls = new Array(positionId).fill(0).map((_, i) =>
    readContract({
      ...stakingContract,
      functionName: "getPositionById",
      args: [BigInt(i)],
      account,
    })
  );

  const positions = await Promise.all(batchReadCalls);

  return positions;
};

export const getAssetIds = async (walletAddress: `0x${string}`) => {};

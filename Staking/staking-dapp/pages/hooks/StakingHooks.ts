import { fetchBalance, readContract, writeContract } from "@wagmi/core";

import { STAKING_ABI, STAKING_ADDRESS } from "../constants/config";
import { calculateRemainingDays } from "./RemainingDays";
import { formatEther, parseEther } from "viem";

export const getBalance = async (walletAddress: `0x${string}`) => {
  return await fetchBalance({ address: walletAddress, formatUnits: "ether" });
};

export const stakeEther = async (
  walletAddress: `0x${string}`,
  id: number,
  value: BigInt
) => {
  if (walletAddress === undefined) return;

  const stakingContract = {
    address: STAKING_ADDRESS as `0x${string}`,
    abi: STAKING_ABI,
  };

  const tx = await writeContract({
    ...stakingContract,
    functionName: "stakeEther",
    args: [id],
    value: BigInt(value?.toString()),
  });

  return tx;
};

export const getAddressPosition = async (walletAddress: `0x${string}`) => {
  if (walletAddress === undefined) return;

  const stakingContract = {
    address: STAKING_ADDRESS as `0x${string}`,
    abi: STAKING_ABI,
  };

  const positionCount = await readContract({
    ...stakingContract,
    functionName: "getPositionByAddress",
    args: [walletAddress],
  });

  const batchReadCalls = new Array(positionCount).fill(0).map((_, i) =>
    readContract({
      ...stakingContract,
      functionName: "getPositionById",
      args: [i],
    })
  );

  const results = await Promise.all(batchReadCalls);
};

export const getAssets = async (
  positionId: number,
  walletAddress: `0x${string}`
) => {
  if (walletAddress === undefined) return;

  const stakingContract = {
    address: STAKING_ADDRESS as `0x${string}`,
    abi: STAKING_ABI,
  };

  //   if (positionId < 1) return [];

  const batchReadCalls = new Array(positionId).fill(0).map((_, i) =>
    readContract({
      ...stakingContract,
      functionName: "getPositionById",
      args: [i],
    })
  );

  const results = await Promise.all(batchReadCalls);

  return results.map((result: any) => {
    const parsedAsset = {
      positionId: result.positionId.toString(),
      percentInterst: Number(result.percentInterest) / 100,
      daysRemaining: calculateRemainingDays(Number(result.unlockDate)),
      etherInterest: formatEther(result.weiInterest),
      etherStaked: formatEther(result.weiStaked),
      open: result.open,
    };

    return parsedAsset;
  });
};

export const getAssetIds = async (walletAddress: `0x${string}`) => {
  if (walletAddress === undefined) return;

  const stakingContract = {
    address: STAKING_ADDRESS as `0x${string}`,
    abi: STAKING_ABI,
  };

  const positionId = await readContract({
    ...stakingContract,
    functionName: "getPositionIdByAddress",
    args: [walletAddress],
  });

  return positionId;
};

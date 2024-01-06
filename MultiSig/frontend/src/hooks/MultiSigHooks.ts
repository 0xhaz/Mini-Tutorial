import { readContract, readContracts } from "@wagmi/core";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./config";

export const getTransactions = async ({
  walletAddress,
  account,
}: {
  walletAddress: `0x${string}` | undefined;
  account: `0x${string}` | undefined;
}) => {
  if (walletAddress === undefined || account === undefined) return [];

  const walletContract = {
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
  };

  const transactionCount = await readContract({
    ...walletContract,
    functionName: "getTransactionCount",
  });

  if (Number(transactionCount) < 1) return [];

  const batchReadCalls = new Array(Number(transactionCount))
    .fill(0)
    .map((_, i) =>
      readContract({
        ...walletContract,
        functionName: "getTransaction",
        args: [BigInt(i)],
        account,
      })
    );

  const data = await Promise.all(batchReadCalls);

  return data.reverse();
};

export const getOwners = async (
  walletAddress: (`0x${string}` | undefined)[]
) => {
  if (walletAddress === undefined) return [];

  const walletContract = {
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
  };

  try {
    const ownersCount = await readContract({
      ...walletContract,
      functionName: "getOwnersCount",
    });

    if (Number(ownersCount) < 1) return [];

    const batchReadCalls = new Array(Number(ownersCount)).fill(0).map(_ => ({
      ...walletContract,
      functionName: "getOwners",
    }));

    const data = await readContracts({
      contracts: batchReadCalls as any,
    });

    return data
      .filter((el: any) => el.status === "success")
      .map((el: any) => el.result as `0x${string}`);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getRequiredSigs = async (
  walletAddress: `0x${string}` | undefined
) => {
  if (walletAddress === undefined) return [];

  try {
    return await readContract({
      address: CONTRACT_ADDRESS as `0x${string}`,
      abi: CONTRACT_ABI,
      functionName: "getnumRequired",
    });
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getApprovalStatus = async ({
  transactions,
  walletAddress,
  account,
}: {
  transactions:
    | readonly [`0x${string}`, BigInt, `0x${string}`, boolean, BigInt][]
    | undefined;
  walletAddress: `0x${string}` | undefined;
  account: `0x${string}` | undefined;
}) => {
  if (
    transactions === undefined ||
    walletAddress === undefined ||
    account === undefined
  )
    return [];

  const transactionCount = transactions.length;

  if (transactionCount == 0) return [];

  const walletContract = {
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
  };

  const batchReadCalls = new Array(transactionCount).fill(0).map((_, i) =>
    readContract({
      ...walletContract,
      functionName: "getApproved",
      args: [BigInt(i), account],
      account,
    })
  );

  try {
    const data = await Promise.all(batchReadCalls);

    return data.reverse();
  } catch (error) {
    console.error(error);
    return [];
  }
};

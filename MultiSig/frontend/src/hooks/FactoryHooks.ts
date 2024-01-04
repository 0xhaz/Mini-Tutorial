import { readContract, writeContract } from "@wagmi/core";
import { FACTORY_ABI, FACTORY_ADDRESS } from "./config";

export const getWallets = async (account: `0x${string}` | undefined) => {
  if (!account) return [];

  try {
    const factoryContract = {
      address: FACTORY_ADDRESS as `0x${string}`,
      abi: FACTORY_ABI,
    };
    const walletCounts = await readContract({
      ...factoryContract,
      functionName: "getWalletCount",
      args: [account],
    });

    if (Number(walletCounts) === 0) return [];

    const batchReadCalls = new Array(Number(walletCounts)).fill(0).map((_, i) =>
      readContract({
        ...factoryContract,
        functionName: "getWallet",
        args: [BigInt(i)],
        account: account,
      })
    );

    const wallets = await Promise.all(batchReadCalls);

    return wallets.reverse();
  } catch (error) {
    console.error(error);
    return [];
  }
};

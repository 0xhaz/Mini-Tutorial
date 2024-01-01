import { fetchBalance } from "@wagmi/core";

export const getBalance = async (walletAddress: `0x${string}`) => {
  return await fetchBalance({ address: walletAddress, formatUnits: "ether" });
};

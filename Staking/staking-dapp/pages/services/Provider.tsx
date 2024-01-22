import { WagmiConfig, configureChains, createConfig } from "wagmi";
import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme,
  Chain,
} from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  trustWallet,
  rainbowWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { sepolia } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import React from "react";

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    infuraProvider({
      apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY as string,
    }),
    publicProvider(),
  ]
);

const projectId = process.env.NEXT_PUBLIC_APP_PROJECT_ID as string;

const connectors = connectorsForWallets([
  {
    groupName: "Recommended Wallets",
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      rainbowWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const appInfo = {
  appName: "Staking with AaveV3",
};

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider appInfo={appInfo} theme={darkTheme()} chains={chains}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default Providers;

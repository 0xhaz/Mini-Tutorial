import * as React from "react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  trustWallet,
  rainbowWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { sepolia, polygonMumbai, goerli, localhost } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [sepolia, polygonMumbai, goerli, localhost],
  [
    infuraProvider({
      apiKey: import.meta.env.VITE_REACT_APP_INFURA_API_KEY as string,
    }),
    publicProvider(),
  ]
);

const projectId = import.meta.env.VITE_REACT_APP_PROJECT_ID;

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

const demoAppInfo = {
  appName: "MultiSig Wallet",
};

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={darkTheme()}
        chains={chains}
        appInfo={demoAppInfo}
      >
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default Providers;

import "../styles/globals.css";
import type { AppProps } from "next/app";

import { WagmiProvider, chain } from "wagmi";
import { providers } from "ethers";
import {
  RainbowKitProvider,
  Chain,
  getDefaultWallets,
  connectorsForWallets,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";

import "@rainbow-me/rainbowkit/styles.css";

const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

console.log({ infuraId });

const provider = ({ chainId }: { chainId?: number }) =>
  new providers.InfuraProvider(chainId, infuraId);

const chains: Chain[] = [
  { ...chain.mainnet, name: "Ethereum" },
  { ...chain.polygonMainnet, name: "Polygon" },
  // { ...chain.optimism, name: "Optimism" },
  // { ...chain.arbitrumOne, name: "Arbitrum" },
];

const wallets = getDefaultWallets({
  chains,
  infuraId,
  appName: "Bonsai3",
  jsonRpcUrl: ({ chainId }) =>
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0],
});

const connectors = connectorsForWallets(wallets);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RainbowKitProvider
      chains={chains}
      theme={{
        lightMode: lightTheme({
          accentColor: "blue",
        }),
        darkMode: darkTheme({
          accentColor: "blue",
        }),
      }}
    >
      <WagmiProvider autoConnect connectors={connectors} provider={provider}>
        <Component {...pageProps} />
      </WagmiProvider>
    </RainbowKitProvider>
  );
}

export default MyApp;

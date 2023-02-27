import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  lightTheme,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID as string;

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [infuraProvider({ apiKey: INFURA_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Alpha",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export const WalletConnectionProvider = (props: {
  children: React.ReactNode;
}) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={{
          lightMode: lightTheme({
            accentColor: "#661AE6",
          }),
          darkMode: darkTheme({
            accentColor: "#661AE6",
          }),
        }}
      >
        {props.children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  connectorsForWallets,
  lightTheme,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID as string;

console.log({ INFURA_ID });

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
            accentColor: "blue",
          }),
          darkMode: darkTheme({
            accentColor: "blue",
          }),
        }}
      >
        {props.children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

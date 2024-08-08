import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { http, WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const wagmiConfig = getDefaultConfig({
  appName: "Web3 Example App",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
  //   process.env.NEXT_PUBLIC_INFURA_ID as string
  // process.env.NEXT_PUBLIC_ALCHEMY_KEY as string
  // transports: {
  //   [mainnet.id]: http(),
  // },
});

const queryClient = new QueryClient();

export const Providers = (props: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{props.children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

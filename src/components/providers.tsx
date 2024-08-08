"use client";

import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { http, WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { clsx } from "clsx";

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
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            theme={darkTheme({
              accentColor: "#00ff00",
              accentColorForeground: "black",
              borderRadius: "medium",
            })}
          >
            {props.children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
};

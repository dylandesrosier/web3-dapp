import Image from "next/image";
import { Providers } from "@/components/providers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ThemeToggle } from "@/components/theme-toggle";
import { GitHub, Twitter } from "react-feather";
import { Button } from "../components/ui/button";
import { ExternalLinkButton } from "../components/external-link-button";
import { Card } from "../components/ui/card";

export default function Home() {
  return (
    <Providers>
      <main className="min-h-screen flex flex-col">
        <Header />
        <Content />
        <Footer />
      </main>
    </Providers>
  );
}

const Header = () => {
  return (
    <div className="flex-grow-0 p-4 flex flex-row justify-end sm:justify-between">
      <DeployOnVercelButton className="hidden sm:block" />
      <ConnectButton chainStatus={"icon"} showBalance={false} />
    </div>
  );
};

const Content = () => {
  return (
    <div className="flex-grow flex p-4 flex-col max-w-md mx-auto">
      <div className="mb-8">
        <h1 className="text-5xl font-bold">Buidl Something</h1>
        <hr className="border-accent w-20 border-b-8" />
      </div>
      <div className="flex flex-col space-y-2 mb-4">
        <p>
          Use WAGMI to start reading and writing data with convenient hooks like{" "}
          <code>useAccount</code> and <code>useContractRead</code>.
        </p>
        <p>
          The <code>useContractWrite</code> hook makes it easy to write data
          especially when paired with the <code>TransactionButton</code> in the
          components folder.
        </p>
      </div>
      <DeployOnVercelButton className="sm:hidden block mx-auto mb-4" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center">
        <ExternalLinkButton href="https://wagmi.sh" icon>
          Wagmi
        </ExternalLinkButton>
        <ExternalLinkButton href="https://viem.sh" icon>
          Viem
        </ExternalLinkButton>
        <ExternalLinkButton href="https://www.rainbowkit.com/" icon>
          RainbowKit
        </ExternalLinkButton>
        <ExternalLinkButton href="https://tailwindcss.com/" icon>
          Tailwind CSS
        </ExternalLinkButton>
        <ExternalLinkButton href="https://tanstack.com/query/latest" icon>
          TanStack Query
        </ExternalLinkButton>
        <ExternalLinkButton href="https://vercel.com/" icon>
          Vercel
        </ExternalLinkButton>
      </div>
    </div>
  );
};

const DeployOnVercelButton = ({ className }: { className?: string }) => (
  <a
    className={className}
    target="_blank"
    rel="noreferrer"
    href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdylandesrosier%2Fweb3-app&env=NEXT_PUBLIC_INFURA_ID"
  >
    <Button className="font-extrabold text-base">Deploy on Vercel</Button>
  </a>
);

const Footer = () => {
  return (
    <div className="flex-grow-0 p-4 flex space-x-1 justify-end">
      <ExternalLinkButton variant={"ghost"} href="https://x.com/dylandesrosier">
        <Twitter />
      </ExternalLinkButton>
      <ExternalLinkButton
        variant={"ghost"}
        href="https://github.com/dylandesrosier"
      >
        <GitHub />
      </ExternalLinkButton>
      <ThemeToggle />
    </div>
  );
};

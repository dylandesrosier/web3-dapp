import type { NextPage } from "next";
import { Page } from "../components/Page";

const Home: NextPage = () => (
  <Page title="Web3 App" description="">
    <div className="flex flex-col gap-8">
      <Hero />
    </div>
  </Page>
);

const Hero = () => {
  return (
    <div className="relative">
      <div className="mask mask-circle absolute inset-1/3 w-1/3 h-1/3 bg-primary" />
      <div className="hero bg-base-200 bg-opacity-50 rounded-xl backdrop-blur-3xl">
        <div className="hero-content text-center py-10 my-8">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Buidl Something Great</h1>
            <div className="flex flex-col gap-2 py-6">
              <p>
                Use WAGMI to start reading and writing data with convenient
                hooks like <code>useAccount</code> and{" "}
                <code>useContractRead</code>.
              </p>
              <p>
                The <code>useContractWrite</code> hook makes it easy to write
                data especially when paired with the{" "}
                <code>TransactionButton</code> in the components folder.
              </p>
            </div>
            <div className="flex flex-col max-w-xs mx-auto gap-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wagmi.sh"
                className="btn btn-primary"
              >
                WAGMI Docs
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdylandesrosier%2Fweb3-app&env=NEXT_PUBLIC_INFURA_ID"
                className="btn btn-primary btn-outline"
              >
                Deploy on Vercel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

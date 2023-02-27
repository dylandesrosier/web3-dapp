import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import {
  getChainNiceName,
  getEtherscanTransactionLink,
} from "../utils/blockchain";
import { ConnectButton } from "@rainbow-me/rainbowkit";

/**
 * Pairs with useContractWrite to provide a button that will connect the wallet, switch the network, write to the contract and display a receipt link.
 * @param props
 * @returns
 */
export const TransactionButton = (props: {
  children: React.ReactNode;
  chainId: number;
  write: (() => void) | undefined;
  className?: string;
  hash?: string;
}) => {
  const { chainId, className, write, hash } = props;

  const { switchNetwork } = useSwitchNetwork();
  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  if (!isConnected) {
    return <ConnectButton />;
  } else if (chain?.id !== chainId) {
    return (
      <button
        className={className}
        disabled={!switchNetwork}
        onClick={() => {
          switchNetwork?.(chainId);
        }}
      >
        Switch to {getChainNiceName(chainId)}
      </button>
    );
  }

  return (
    <>
      <button
        className={className}
        disabled={!write}
        onClick={() => {
          write?.();
        }}
      >
        {props.children}
      </button>
      {!!hash && (
        <a
          className={className}
          href={getEtherscanTransactionLink(chainId, hash)}
        >
          Receipt
        </a>
      )}
    </>
  );
};

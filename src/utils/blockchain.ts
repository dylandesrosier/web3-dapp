export const getEtherscanAddressLink = (chainId: number, address: string) => {
  const prefix = getEtherscanPrefix(chainId);
  return `${prefix}/address/${address}`;
};

export const getEtherscanTransactionLink = (chainId: number, hash: string) => {
  const prefix = getEtherscanPrefix(chainId);
  return `${prefix}/tx/${hash}`;
};

export const getEtherscanPrefix = (networkId: number) => {
  switch (networkId) {
    case 1:
      return "https://etherscan.io";
    case 3:
      return "https://ropsten.etherscan.io";
    case 4:
      return "https://rinkeby.etherscan.io";
    case 5:
      return "https://goerli.etherscan.io";
    case 42:
      return "https://kovan.etherscan.io";
    case 137:
      return "https://polygonscan.com";
    case 10:
      return "https://optimistic.etherscan.io";
    case 43114:
      return "https://snowtrace.io";
    default:
      throw new Error("Unsupported network");
  }
};

export const getChainNiceName = (chainId: number) => {
  switch (chainId) {
    case 1:
      return "Ethereum";
    case 3:
      return "Ropsten";
    case 4:
      return "Rinkeby";
    case 137:
      return "Polygon";
    case 10:
      return "Optimism";
    case 43114:
      return "Avalanche";
    default:
      return "Unknown";
  }
};

export const getViewDelegatePath = (
  chainId: number,
  prizePoolAddress: string,
  delegateAddress: string
) => {
  return `/chain/${chainId}/pool/${prizePoolAddress}/delegate/${delegateAddress}`;
};

# A Simple Web3 App Template

A mildly opinionated, slim app configured with some of my favourite tools for building web3 apps.

[App - React](https://reactjs.org)

[App - Next](https://nextjs.org/)

[Wallet Connection - RainbowKit](https://rainbowkit.com/)

[Blockchain Querying - WAGMI](https://wagmi.sh/)

[Data Storage - Jotai](https://jotai.org)

[Data Fetching - React Query](https://react-query-v3.tanstack.com)

[Styling - Tailwind](https://tailwindcss.com)

[Icons - Feather Icons](https://www.npmjs.com/package/react-feather)

## Getting Started

Use this repo as a template through GitHub's interface above or deploy straight to Vercel below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdylandesrosier%2Fweb3-app&env=NEXT_PUBLIC_INFURA_ID)

### Installation

Install packages

```
bun install
```

Set up environment variables

```
cp .env.local.template .env.local && open -t .env.local
```

### Development server

Run development server

```
bun dev
```

> Tip: Check out src/utils/blockchain.ts for some more convenience

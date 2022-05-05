import type { NextPage } from "next";
import Head from "next/head";
import Button, { ButtonColor } from "../components/Button";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alpha</title>
        <meta name="description" content="Alpha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="px-4 max-w-7xl mx-auto"></main>
    </div>
  );
};

export default Home;

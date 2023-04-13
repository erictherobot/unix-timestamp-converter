import type { NextPage } from "next";
import Head from "next/head";
import TimestampConverter from "@/components/TimestampConverter";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Unix Timestamp Converter</title>
        <meta
          name="description"
          content="Convert Unix timestamps to human-readable dates and more"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TimestampConverter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

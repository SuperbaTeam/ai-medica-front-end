import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

import HomeHero from "../components/HomeHero";
import HomeGridOne from "../components/HomeGridOne";
import HomeGridTwo from "../components/HomeGridTwo";
import HomeGridThree from "../components/HomeGridThree";

export default function Home() {
  return (
    <div className="justify-center min-h-screen">
      <Head>
        <title>AI Medica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <HomeHero/>
      <HomeGridOne />
      <HomeGridTwo />
      <HomeGridThree />

      <Footer />
    </div>
  );
}

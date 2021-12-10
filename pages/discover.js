import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DiscoverDropDown from "../components/DiscoverDropDown";
import DiscoverForm from "../components/DiscoverForm";

export default function Discover() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Discover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <DiscoverDropDown/>
      <DiscoverForm/>
      <Footer />
    </div>
  );
}

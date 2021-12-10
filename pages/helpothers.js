import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HelpHero from "../components/HelpHero";
import HelpForm from "../components/HelpForm";


export default function HelpOthers() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Help Others</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HelpHero/>
      <HelpForm/>
      <Footer />
    </div>
  );
}

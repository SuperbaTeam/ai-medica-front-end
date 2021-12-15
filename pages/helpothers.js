import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HelpHero from "../components/HelpHero";
import HelpForm from "../components/HelpForm";


export default function HelpOthers() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>Help Others</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col items-center justify-center py-2 my-8">
        <HelpHero/>
        <HelpForm/>
      </div>
      <Footer />
    </div>
  );
}

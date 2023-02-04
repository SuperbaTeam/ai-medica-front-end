import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

import ResultHero from "../components/ResultHero"
import ResultComponent from "../components/ResultComponent";


export default function result() {

  
  return (

    <div className="justify-center min-h-screen">
      <Head>
        <title>Result</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ResultHero/>
      <ResultComponent/>
      <Footer />
    </div>
  );
}

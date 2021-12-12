import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Results from "../components/Result";
import ResultHero from "../components/ResultHero"

export default function Result() {
  return (
    <div className="justify-center min-h-screen">
      <Head>
        <title>Result</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ResultHero/>
      <Results/>
      <Footer />
    </div>
  );
}

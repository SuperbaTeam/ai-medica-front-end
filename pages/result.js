import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Result from "../components/Result";

export default function Result() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Result</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Result/>
      <Footer />
    </div>
  );
}

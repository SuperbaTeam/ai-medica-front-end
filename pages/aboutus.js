import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutGrid from "../components/AboutGrid";
import AboutTeam from "../components/AboutTeam";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutGrid/>
      <AboutTeam/>
      <Footer />
    </div>
  );
}

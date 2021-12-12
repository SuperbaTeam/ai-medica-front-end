import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DiscoverDropDown from "../components/DiscoverDropDown";
import DiscoverForm from "../components/DiscoverForm";
import { useState } from "react";
import useResource from '../contexts/hooks/useResource'

export default function Discover() {
const { resources, loading, createResource, deleteResource } = useResource()
const [selectedDisease, selectDisease] = useState(0);



  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Discover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <DiscoverDropDown selectDisease={selectDisease}/>
      <DiscoverForm 
      selectedDisease={selectedDisease}       
      deleteResource={deleteResource}
      createResource={createResource}/>
      <Footer />
    </div>
  );
}

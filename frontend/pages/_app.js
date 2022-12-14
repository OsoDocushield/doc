import Head from "next/head";
import { useEffect, useState } from "react";
import AllToaster from "../src/components/AllToaser";
import { AuthProvider } from "../src/context/AuthContext";
import { CartProvider } from "../src/context/CartConntext";
import { ContactProvider } from "../src/context/ContactContext";
import Footer from "../src/layouts/Footer";
import Header from "../src/layouts/Header";
import PreLoader from "../src/layouts/PreLoader";
import ScrollTop from "../src/layouts/ScrollTop";
import "../style/main.css";

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 200);

    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.WOW = require("wowjs");
      }
      new WOW.WOW().init();
    }, 2000);
  }, []);
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png" />
      </Head>
      {preloader ? <PreLoader /> : <ScrollTop />}
      <AllToaster />
      <ContactProvider>
        <AuthProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </AuthProvider>
      </ContactProvider>
    </>
  );
}

export default MyApp;

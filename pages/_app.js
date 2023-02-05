import { AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AnimatePresence>
  );
}

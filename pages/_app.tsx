import { AnimatePresence } from "framer-motion";
import {Footer, Navbar} from "../components";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AnimatePresence>
  );
}

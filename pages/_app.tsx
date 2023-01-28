import {Navbar, Footer} from '@app/components';
import "../styles/globals.css";

const FooterProps = {
  email: "ashanghimire10@gmail.com",
  facebook: "aashan10",
  insta: "aashan10",
  linkedin: "aashan10",
  github: "aashan10",
}

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      <Footer {...FooterProps}/>
    </>
  );
}

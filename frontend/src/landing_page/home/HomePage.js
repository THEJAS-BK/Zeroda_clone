import Hero from "./Hero";
import Awards from "./Awards";
import Status from "./Status";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Awards />
      <Status />
      <Pricing />
      <OpenAccount />
      <Footer />
    </>
  );
}
export default HomePage;

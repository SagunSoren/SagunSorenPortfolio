import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="dark:bg-neutral-900">
      <Navbar />
      <Hero />
      <Introduction />
      {/* <Services /> */}
      <Portfolio />
      <Connect />
      <Footer />
    </div>
  );
}

import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <Sponsors /> */}
      <About />
      {/* <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials /> */}
      <Team />
      {/* <Pricing />
      <Newsletter />
      <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

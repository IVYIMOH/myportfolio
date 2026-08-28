import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Results from "./components/Results";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Work />
        <Process />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto lora-font">
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

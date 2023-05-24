import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section2 />
      </main>
      <Footer />
    </>
  );
}

export default App;

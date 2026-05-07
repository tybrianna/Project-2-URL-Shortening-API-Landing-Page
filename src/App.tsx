import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Shortener from "./components/Shortener/Shortener";
import Statistics from "./components/Statistics/Statistics";
import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Shortener />
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
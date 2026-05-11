import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero Section/hero";
import Shortener from "./components/Shortener/shortener";
import Statistics from "./components/Statistics/statistics";
import Boost from "./components/Boost/boost";
import Footer from "./components/Footer/footer";

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
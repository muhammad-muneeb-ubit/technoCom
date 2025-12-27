import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import HeroSection from "./Component/HeroSection/HeroSection";
import Service from "./Component/Services/Service";
import About from "./Component/About/About";
import Stats from "./Component/Stats/Stats";
import Products from "./Component/Products/Products";
import Client from "./Component/Clients/Client";
import Team from "./Component/Team/Team";
import Contact from "./Component/Contact/Contact";
import topArrow from "./assets/arrows.png";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="border-b-2 border-green-700  mt-12 mx-12"></div>
      <Service />
      <About />
      <Stats />
      <div className="border-b-2 border-green-700  my-12 mx-12"></div>
      <Products />
      <Client />
      <div className="border-b-2 border-green-700  my-12 mx-12"></div>
      <Team />
      <Contact />
      <Footer />
      <div
        id="top"
        className="w-[30px] h-[30px] text-center rounded border border-green-500 fixed bottom-0 right-0 m-4 cursor-pointer"
      >
        <a href="#hero-section">
          <img src={topArrow} alt="to top" />
        </a>
      </div>
    </>
  );
}

export default App;

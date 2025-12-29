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
import UpdatedClient from "./Component/Clients/UpdatedClient";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="pt-[60px] border-b-2 border-green-700  mt-12 mx-12"></div>
      <Service />
      <About />
      <Stats />
      <div className="border-b-2 border-green-700  my-12 mx-12"></div>
      <Products />
      {/* <Client /> */}
      <UpdatedClient />
      <div className="border-b-2 border-green-700  my-12 mx-12"></div>
      {/* <Team /> */} {/* Team component is currently commented out */}
      <Contact />
      <Footer />
      <div
        className="w-[30px] h-[30px] text-center rounded border border-green-500 fixed bottom-0 right-0 m-4 cursor-pointer"
      >
        <a href="#top">
          <img src={topArrow} alt="to top" />
        </a>
      </div>
    </>
  );
}

export default App;

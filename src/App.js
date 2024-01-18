import "./App.css";
import Page from "./LandingPage";
import Footer from "./Footer";
import About from "./About";
import Skills from "./Skills";
import Work from './Work'
// import Contact from './Contact';
import HeroSection from "./HeroSection";

function App() {
  return (
    <div className="App pattern-dots pattern-gray-500 
    pattern-size-24 pattern-opacity-10">
      <Page />
      <div className="mx-20">
        <HeroSection/>
        <About />
        <Skills />
        <Work/>
        {/* <Contact/> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;

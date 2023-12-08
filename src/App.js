import './App.css';
import Page from './LandingPage';
import Footer from './Footer';
import About from './About';
import Skills from './Skills';
// import Contact from './Contact';

function App() {
  return (
    <div className="App">
     <Page/>
     <About/>
     <Skills/>
     {/* <Contact/> */}
     <Footer/>
    </div>
  );
}

export default App;

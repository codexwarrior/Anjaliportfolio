// import './index.css';
import Navbar from './components/Navbar';
import Home from './components/home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Experience from './components/Experience';
// import Certificate from './components/Certificate';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <SocialLinks/>
      <Experience/>
      {/* <Certificate/> */}
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;

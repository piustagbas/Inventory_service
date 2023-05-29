import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Values from './components/Values';
import Contact from './components/Contact';
import User from './components/User';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <SocialLinks />
      <NavBar />

      <Routes>

      {/* <Route path={["/", "/home"]} element={<Home />} /> */}
      {["/", "/home"].map((path, index) => 
        <Route path={path} element={<Home/>} key={index}/>)}
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/values" element={<Values />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user" element={<User />} />

      </Routes>
    </div>
  );
}

export default App;

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Military from "./components/Military";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
// import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Military />
      <Contact />
    </div>
  );
}

export default App;

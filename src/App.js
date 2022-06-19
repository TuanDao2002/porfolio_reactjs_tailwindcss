import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Experience />
            <Contact />
        </div>
    )
}

export default App;

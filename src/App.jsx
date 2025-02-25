import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import Chatbot from "./components/Chatbot"; // Import AI chatbot

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Hero Section with Navbar */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Main Content Sections */}
        <About />
        <Experience />
        <Tech />
        <Works />

        {/* Contact Section */}
        <div className="relative z-0">
          <Contact />
        </div>

        {/* Chatbot & HireMe Section */}
        <Chatbot /> {/* AI Chatbot for user interaction */}
        <HireMe />
      </div>
    </BrowserRouter>
  );
};

export default App;

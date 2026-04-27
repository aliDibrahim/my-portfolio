import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout//Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import CursorGlow from "./components/CursorGlow";
function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);


  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth'
    });
  };
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {/* {showScrollButton && ( */}
      <div
        className={`
          fixed bottom-8  z-50
          transition-all duration-500 ease-out
          ${showScrollButton
            ? 'opacity-100  right-6 visible'
            : 'opacity-0  -right-6 invisible'
          }
        `}
      >
        <button
          className=" bg-primary text-primary-foreground rounded-full p-2.5 hover:bg-primary/90 shadow-lg shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary animate-float"
          onClick={scrollToTop}
        >
          <ArrowUp size={24} />
        </button>
      </div>
      {/* )} */}
    </div>
  );
}

export default App;

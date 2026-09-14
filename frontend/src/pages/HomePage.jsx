import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

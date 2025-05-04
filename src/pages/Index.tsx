
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import DevProfiles from "../components/DevProfiles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      <div className="fixed inset-0 bg-gradient-radial from-dark-800/50 to-dark-900 -z-10"></div>
      <div className="fixed inset-0 grid-bg -z-10 opacity-30"></div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <DevProfiles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

import AboutMe from "./sections/aboutme/AboutMe";
import Experience from "./sections/experience/Experience";
import Hero from "./sections/hero/Hero";
import Navbar from "./components/layout/navbar/Navbar";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import ContactMe from "./sections/contactme/ContactMe";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <main className="primary-background min-h-screen font-montserrat overflow-x-hidden">
      <Navbar />
      <Hero/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Skills/>
      <ContactMe/>
      <Footer/>
    </main>
  );
}

export default App;

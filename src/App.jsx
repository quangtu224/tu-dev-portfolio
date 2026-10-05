import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/navBar.jsx";
import Hero from "./components/Hero/hero.jsx";
import Education from "./components/Education/education.jsx";
import Experience from "./components/Experience/experience.jsx";
import Skills from "./components/Skills/skills.jsx";
import Footer from "./components/Footer/footer.jsx";
import ContactModal from "./components/Contact/contactModal.jsx";
function App() {
  // Shared by NavBar and Footer, so the state lives here
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <NavBar onContactClick={openContact} />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Footer onContactClick={openContact} />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}

export default App;

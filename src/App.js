import React from "react";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Quals from "./components/Quals";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutMe />
      <Quals />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

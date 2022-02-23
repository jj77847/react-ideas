import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Quals from "./components/Quals";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutMe />
      <Quals />
      <Experience />
      <Card />
      <Card />
      <Footer />
    </div>
  );
}

export default App;

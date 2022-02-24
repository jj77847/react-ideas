import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// import AboutMe from "./components/AboutMe";
// import Experience from "./components/Experience";
// import Header from "./components/Header";
// import Quals from "./components/Quals";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";
// import Education from "./components/Education";
// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";

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

// import navbar from "./components/navbar"

// ReactDOM.render(
//     <Router>
//        <Switch>
// 					<Header/> //new
// 		      <Route exact path="/" component={Homepage}/>
//           <Route exact path="/about-me" component={AboutMe }/>
//           <Route  path='/contact' component={Contact} />
//           <Route  path='/education' component={Education} />
//           <Route  path='/experience' component={Experience} />
//           <Route  path='/footer' component={Footer} />
//           <Route  path='/header' component={Header} />
//           <Route  path='/projects' component={Projects} />
//           <Route  path='/quals' component={Quals} />
// 	    </Switch>
//     </Router>,
//     document.getElementById('root')};

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card

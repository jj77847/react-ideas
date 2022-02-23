import React from "react";
import "../styles/Img.css";

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
  content: {
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function AboutMe() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        I've been self taught web developer for 6 months focusing on the basics
        of coding using HTML, CSS and Python. These basic courses alongside
        Freecodecamp.com and Futurelearn.com courses. I've recently enrolled in
        Birmingham University's 6 month intensive Coding Boot Camp in September
        2021. After it finishes in March 2022, I will be a Full Stack Web
        Developer. As of the 2nd phase of the University Boot camp, I'm
        currently working with HTML, CSS, JavaScript, JQuery, MySQL, Sequelize,
        Node JS, Express JS, Handlebars JS, MVC Paradigm, Heroku, Node, Npm and
        Github Im just starting React with the start of the end of phase 3.
        Examples of my projects are below and details are on my Github Profile.
      </div>
    </div>
  );
}

export default AboutMe;

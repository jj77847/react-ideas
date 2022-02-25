import React from "react";
import "../styles/App.css";

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
    textAlign: "justify",
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object

function Projects() {
  return (
    // Marketing Start
    (
      <div style={styles.card}>
        <div style={styles.heading}>Projects</div>
        <div style={styles.content}>Accessability Website</div>
        <div style={styles.image}>
          <img
            class="image"
            src={require("./assets/images/marketing-screenshot-1.png")}
            alt="Marketing-Accessability"
          />
        </div>
        <div style={styles.content}>
          Tasked with refactoring a marketing website focusing on accessability
          and readability in the html and css.
        </div>
        <div style={styles.content}>
          <a
            href="https://jj77847.github.io/marketing-acessability-website/"
            class="btn btn-primary"
          >
            Link
          </a>
        </div>
        <div style={styles.content}>
          <a
            href="https://github.com/jj77847/marketing-acessability-website/tree/dev"
            class="l btn-success"
          >
            Code
          </a>
        </div>
      </div>
    ),
    (
      // Marketing End
      // Password Start
      <div style={styles.card}>
        <div style={styles.content}>Password Generator</div>
        <div style={styles.image}>
          <img
            class="image"
            src={require("./assets/images/password-generator-screenshot-2.png")}
            alt="Marketing-Accessability"
          />
        </div>
        <div style={styles.content}>
          In this project I have created a README generator using Node.js with
          the inquirer package. This allows a user to go through a series of
          terminal prompts and the program creates a markdown file using the
          answers collected from the user.
        </div>
        <div style={styles.content}>
          <a href="https://youtu.be/0sOWbX9wO88" class="btn btn-primary">
            Video Link
          </a>
        </div>
        <div style={styles.content}>
          <a
            href="https://github.com/jj77847/good-readme-generator"
            class="l btn-success"
          >
            Code
          </a>
        </div>
      </div>
    ),
    (
      // Password Generator End
      // Portfoilo Start
      <div style={styles.card}>
        <div style={styles.image}>
          <img
            class="image"
            src={require("./assets/images/profile-screenshot-3.png")}
            alt="Portfolio"
          />
        </div>
        <div style={styles.content}>
          Portfolio of Jonathan Jefferies using example websites from GitHub,
          Codepen, Freecodecamp and Futurelearn.
        </div>
        <div style={styles.content}>
          <a
            href="https://jj77847.github.io/portfolio/"
            class="btn btn-primary"
          >
            Link
          </a>
        </div>
        <div style={styles.content}>
          <a
            href="https://github.com/jj77847/portfolio/tree/dev"
            class="l btn-success"
          >
            Code
          </a>
        </div>
      </div>
    ),
    (
      // Portfolio End
      // Code Quiz Start
      <div style={styles.card}>
        <div style={styles.content}>Portfolio</div>
        <div style={styles.image}>
          <img
            class="image"
            src={require("./assets/images/profile-screenshot-3.png")}
            alt="Portfolio"
          />
        </div>
        <div style={styles.content}>
          Portfolio of Jonathan Jefferies using example websites from GitHub,
          Codepen, Freecodecamp and Futurelearn.
        </div>
        <div style={styles.content}>
          <a
            href="https://jj77847.github.io/portfolio/"
            class="btn btn-primary"
          >
            Link
          </a>
        </div>
        <div style={styles.content}>
          <a
            href="https://github.com/jj77847/portfolio/tree/dev"
            class="l btn-success"
          >
            Code
          </a>
        </div>
      </div>
    )
  );
}

export default Projects;

import React from "react";
import "../styles/Img.css";
let image = require("folder/image.format");
<img src={image.default} alt="image not found" />;

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

function Projects() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Project</div>
      <div style={styles.content}>
        <p>Accessability Website</p>
        <img
          src={require("./images/projects/marketing-screenshot-1.png")}
          alt="Marketing-Accessability"
        />
        <p>
          description: "Tasked with refactoring a marketing website focusing on
          accessability and readability in the html and css."
        </p>
        <a
          href="https://jj77847.github.io/marketing-acessability-website/"
          class="btn btn-primary"
        >
          Link
        </a>
        <a
          href="https://github.com/jj77847/marketing-acessability-website/tree/dev"
          class="btn btn-success"
        >
          Code
        </a>
      </div>
    </div>
  );
}

export default Projects;

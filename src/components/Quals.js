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
function Quals() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Qualifications</div>
      <div style={styles.content}>
        Programming for Everyone - University of Leeds
      </div>

      <div style={styles.content}>
        Learn to Code for the Web - University Leeds
      </div>

      <div style={styles.content}>
        Creating a Great User Experience for Mobile Apps - University Leeds
      </div>

      <div style={styles.content}>
        Software Development Fundamentals: Programming
      </div>

      <div style={styles.content}>Languages and HTML - University Leeds</div>

      <div style={styles.content}>
        Software Development Fundamentals: Web Accessibility and CSS -
        University Leeds
      </div>

      <div style={styles.content}>
        Software Development Fundamentals: Project Management - University Leeds
      </div>

      <div style={styles.content}>
        Software Development Fundamentals: Web Accessibility and CSS -
        University Leeds
      </div>

      <div style={styles.content}>
        HTML Certificate - Programming Hub Certificate
      </div>

      <div style={styles.content}>
        Python 3 Certificate - Programming Hub Certificate
      </div>

      <div style={styles.content}>
        CSS Certificate - Programming Hub Certificate
      </div>

      <div style={styles.content}>
        300hrs Responsive Web Design, Developer Certification - FreeCodeCamp.org
      </div>

      <div style={styles.content}>
        Full Stack Web Developer - Birmingham University Boot-camp (Sept 21 -
        March 22)
      </div>
    </div>
  );
}

export default Quals;

Quals.js;

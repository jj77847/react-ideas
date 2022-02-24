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
function Education() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Education</div>
      <div style={styles.content}>
        2008-2009 Plymouth University, FSDC Outdoor Education - (deferred 2nd
        year due to injury)
      </div>
      <div style={styles.content}>
        2002-2007 Southdowns College, BTECH Nat Deploma in Outdoor Education
        Year 1 Pass and BTECH Nat Deploma in Public Services MMP
      </div>
      <div style={styles.content}>
        1998-2002 The Bourne Community College, 9 GCSE’s including English,
        Music and ICT
      </div>
    </div>
  );
}

export default Education;

Education.js;

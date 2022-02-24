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
function Contact() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Contact</div>
      <div style={styles.content}>
        Thank you for checking out my portfolio and hope to hear from you soon.
        Please click on the links below for further information.
      </div>
      <div>
        - Youtube: https://www.youtube.com/channel/UCneC1cNAT-2VtBQeO6gTbqg -
        GitHub: https://github.com/jj77847/ - linkedin:
        https://www.linkedin.com/in/jonathan-jefferies-70916110b - Facebook:
        https://www.facebook.com/jajefferies - Email:
        jonathanjefferies1985@gmail.com
      </div>
    </div>
  );
}

export default Contact;

Contact.js;

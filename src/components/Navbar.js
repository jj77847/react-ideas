import React from "react";
import { Link } from "react-router-dom";

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
};

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.Navbar}>
        <a>About Us</a>
      </div>
      <div style={styles.Navbar}>
        <a>Experience</a>
      </div>
      <div style={styles.Navbar}>
        <a>Qualifications</a>
      </div>
      <div style={styles.Navbar}>
        <a>Projects</a>
      </div>
      <div style={styles.Navbar}>
        <a>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;

//   <div>
//     <li>
//       <Link to="/">AboutMe</Link>
//     </li>
//     <li>
//       <Link to="/contact">Contact</Link>
//     </li>
//     <li>
//       <Link to="/education">Education</Link>
//     </li>
//     <li>
//       <Link to="/experience">Experience</Link>
//     </li>
//     <li>
//       <Link to="/footer">Footer</Link>
//     </li>
//     <li>
//       <Link to="/header">Header</Link>
//     </li>
//     <li>
//       <Link to="/projects">Projects</Link>
//     </li>
//     <li>
//       <Link to="/quals">Quals</Link>
//     </li>

//   </div>
//   );
// }
// export default navbar;

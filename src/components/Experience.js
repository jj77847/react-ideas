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
function Experience() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Experience</div>
      <div style={styles.content}>
        2012-2017: Personal Trainer and Climbing Wall Instructor- Jubilee2
      </div>
      <div style={styles.content}>
        Training In-House Gym Instructors and Lifeguards to enable them to
        become Climbing Wall Instructors. Running Tasters, Kids club, Adult
        Climbing and disabled Abseiling sessions. Route setting the bouldering
        and traversing walls. Running all Sessions and maintaining paperwork eg
        Nicas lvls 1 and 2, Lead Climbing and Tru Blue Autos. All aspects of gym
        inductions, cleaning, paperwork and working taking PT/Rehab Injury
        sessions, focussing on Bodyweight and TRX/functional training.
      </div>

      <div style={styles.content}>
        2018-2019: Special Needs Teaching Assistant(Autism and Deaf) - Academics
      </div>
      <div style={styles.content}>
        Working with various schools in Stoke-on-Trent and all aspects of
        classroom assistant role and 1:1 support to various disabled students.
        Working mainly Autistic, Cebreal palsy and Deaf children ranging from
        5yrs to 16yrs.
      </div>

      <div style={styles.content}>
        2020-2022: Stay at Home Dad - Family Commitments
      </div>
      <div style={styles.content}>
        Looking after my 4yrs and 1yrs Daughters, also retraining in the
        evenings and nap-times as the about me section states 'self taught web
        developer for 6 months focusing on the basics of coding using mainly
        Futurelearn.com foundational courses Jan-Feb 2021.
      </div>
    </div>
  );
}

export default Experience;

Experience.js;

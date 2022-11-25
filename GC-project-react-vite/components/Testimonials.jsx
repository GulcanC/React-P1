import React from "react";
import { feedback } from "../constants";
import styles from "../src/style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} ${styles.testimonialsSection}`}
  >
    <div className={styles.testimonialsDiv1}>
      <div
        className={`${styles.flexJustify} ${styles.wfull} ${styles.testimonialsDiv}`}
      >
        <h1 className={styles.heading2}>
          What people are <br className={styles.smallHidden} /> saying about us
        </h1>
        <div className={styles.testimonialsDiv2}>
          <p className={`${styles.paragraph} ${styles.testimonialsP}`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.testimonialsDiv3}>
      {feedback.map((cardItem) => (
        <FeedbackCard key={cardItem.id} {...cardItem} />
      ))}
    </div>
  </section>
);

export default Testimonials;

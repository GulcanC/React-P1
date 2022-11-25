import React from "react";
import styles from "../src/style";
import Button from "./Button";

const CTA = () => (
<section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} ${styles.sectionCTA}`}>
  <div className={styles.flexcol1} ><h2 className={styles.heading2}>Let's try our service now!</h2>
  <p className={`${styles.paragraph} ${styles.pCTA}`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
  </div>

  <div className={`${styles.flexCenter} ${styles.divCTA}`} ><Button /></div>
</section>
)

export default CTA;

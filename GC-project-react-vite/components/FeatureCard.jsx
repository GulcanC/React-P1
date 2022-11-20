import React from "react";
import { features } from "../constants";
import styles from "../src/style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`${styles.featureCardDiv} ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }`}
  >
    <div className={`${styles.featureCardDiv2} ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className={`${styles.featureCardImg}`} />
    </div>
    <div className={`${styles.featureCardDiv3}`}>
      <h4 className={`${styles.featureCardH4}`}>{title}</h4>
      <p className={`${styles.featureCardP}`}>{content}</p>
    </div>
  </div>
);

export default FeatureCard;

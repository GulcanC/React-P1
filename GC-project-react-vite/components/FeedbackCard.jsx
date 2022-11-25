import React from "react";
import { quotes } from "../assets";
import styles from "../src/style";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className={`${styles.flexJustifyCol} ${styles.feedbackCardDiv1}`}>
    <img src={quotes} alt="double_quotes" className={styles.feedbackCardImg} />
    <p className={styles.paragraph2}>{content}</p>

    <div className={styles.flexrow}>
      <img src={img} alt="name" className={styles.feedbackCardDiv2} />
      <div className={`${styles.feedbackCardDiv3} ${styles.flexcol1}`}>
        <h4 className={styles.feedbackCardH4}>{name}</h4>
        <p className={styles.feedbackCardP}>{title}</p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;

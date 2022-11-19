import React from "react";
import styles from "../src/style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} ${styles.getStarted}`}>
    <div className={`${styles.flexCenter} ${styles.getStartedDiv1}`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className={`${styles.getStartedP}`}>
          <span className={`${styles.bgclip}`}>Get</span>{" "}
        </p>
        <img src={arrowUp} alt="arrow" className={`${styles.getStartedImg}`} />
      </div>
      <p className={`${styles.getStartedP}`}>
        <span className={`${styles.bgclip}`}>Started</span>
      </p>
    </div>
  </div>
);
export default GetStarted;

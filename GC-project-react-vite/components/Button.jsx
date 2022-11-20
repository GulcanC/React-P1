import React from "react";
import styles from "../src/style";
const Button = () => {
  return (
    <button type="button" className={`${styles.button} ${styles.mt10} `}>
      Get Started
    </button>
  );
};

export default Button;

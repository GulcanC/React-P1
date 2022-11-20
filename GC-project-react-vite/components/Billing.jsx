import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../src/style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className={`${styles.billingImg}`} />
      <div className={`${styles.billingDiv1}`}></div>
      <div className={`${styles.billingDiv2}`}></div>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className={styles.billingBr} /> billing &
        invoicing.
      </h2>
      <p className={`${styles.billingP} ${styles.paragraph}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        voluptate, perspiciatis enim, magni eaque, sint cumque corporis
        repellendus praesentium eius ullam quaerat placeat exercitationem quae
        amet. Maiores autem voluptates quibusdam?
      </p>

      <div className={styles.billingDiv3}>
        <img src={apple} alt="apple store" className={styles.billingImg1} />
        <img src={google} alt="google store" className={styles.billingImg2} />
      </div>
    </div>
  </section>
);
export default Billing;

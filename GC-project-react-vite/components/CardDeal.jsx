import React from "react";
import { card } from "../assets";
import styles, { layout } from "../src/style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className={styles.billingBr} /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} ${styles.cardDealP}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        saepe minima a eligendi accusantium ut nostrum facere? Nisi dignissimos
        culpa ducimus hic? Officia voluptatum consequuntur nisi ad animi ipsum
        nihil.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className={styles.cardDealImg} />
    </div>
  </section>
);

export default CardDeal;

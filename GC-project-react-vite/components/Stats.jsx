import React from "react";
import { stats } from "../constants";
import styles from "../src/style";

const Stats = () => (
  <section className={`${styles.flexCenter} ${styles.statSection}`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`${styles.justifyStart} ${styles.flex1} ${styles.m3}`}
      >
        <h4 className={`${styles.heading4}`}>{stat.value}</h4>
        <p className={`${styles.statP}`}>{stat.title}</p>
      </div>
    ))}
  </section>
);

export default Stats;

import React from "react";
import { features } from "../constants";
import styles, { layout } from "../src/style";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className={`${styles.smhidden}`} /> we'll
          handle the money
        </h2>
        <p className={`${styles.paragraph} ${styles.businessP}`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button />
      </div>

      <div className={`${layout.sectionImg} ${styles.businessFlexCol}`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;

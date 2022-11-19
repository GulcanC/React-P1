import React from "react";
import styles from "../src/style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`${styles.paddingY} ${styles.flexRowCol}`}>
    <div className={`${styles.flexcol} ${styles.paddinglg} ${styles.paddingX}`}>
      <div
        className={`${styles.flexrowcenter} ${styles.py6} ${styles.px4} ${styles.mb2} ${styles.rounded10} bg-discount-gradient`}
      >
        <img src={discount} alt="discount" className={`${styles.icon1}`} />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className={`${styles.flexJustify} ${styles.wfull}`}>
        <h1 className={`${styles.heroH1}`}>
          The Next <br className={`${styles.heroH1br}`} />{" "}
          <span className={`${styles.bgclip}`}>Generation</span>
        </h1>
        <div className={`${styles.circle}`}>
          <GetStarted />
        </div>
      </div>

      <h1 className={`${styles.heroH12}`}>Payment Method.</h1>
      <p className={`${styles.heroH1p}`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div>
      <img src={robot} alt="robot" className={`${styles.heroImgRobot}`} />
      <div className={`${styles.pinkGradient}`}></div>
      <div className={`${styles.whiteGradient}`}></div>
      <div className={`${styles.pinkGradient}`}></div>
    </div>
    <div className={`${styles.sshidden} ${styles.flexCenter}`}></div>
  </section>
);
export default Hero;

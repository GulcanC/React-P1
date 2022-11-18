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
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white">
          The Next <br className="sm:block hidden" />{" "}
          <span className={`${styles.bgclip}`}>Generation</span> Payment Method
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
    </div>
  </section>
);
export default Hero;

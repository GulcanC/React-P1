import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";
import { close, linkedin, logo, menu } from "../assets";
import styles from "../src/style";

const Navbar = () => {
  // at the begining toggle is false = close
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.flexJustify}  mt-3 ${styles.pytoggle}
    w-full  navbar`}
    >
      <img
        src={logo}
        alt="hoobank"
        className={`${styles.logoSize} ${styles.mtop}`}
      />
      <ul className={`list-none  ${styles.smallHidden} ${styles.flexEnd}`}>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-[16px] ${styles.cursor} ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* for small screens toggle */}
      {/* when the toggle is turn on, we want ot show a close icon otherwise we want
      to show menu */}
      <div className={`${styles.toggle}`}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className={`object-contain ${styles.toggleSize} ${styles.mtop} ${styles.cursor}`}
          // Create a call backe function to update the state
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? "flex" : "hidden"} ${styles.menu}`}>
          <ul className={` ${styles.ul}`}>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`${styles.ulli} ${styles.cursor} ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

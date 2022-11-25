import React from "react";
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import styles from '../src/style';

const Footer = () => (<section className={`${styles.flexCenter} ${styles.paddingY} ${styles.flexCol}`}>
  <div className={`${styles.flexStart} ${styles.footerDiv}`}>
    <div className={styles.footerDiv2}>
      <img src={logo} alt="logo" className={styles.footorImg} />
      <p className={`${styles.paragraph} ${styles.footerP} `}>A new way to make the payments easy, reliable and secure.</p>
    </div>

    <div className={styles.footerDiv3}>{footerLinks.map((footerLink) => (<div key={footerLink.key} className={styles.footerDiv4}>
      <h4 className={styles.footerTitle}>{footerLink.title}</h4>
      <ul >
        {footerLink.links.map((link, index) => (
          <li key={link.name} className={`${styles.footerListItem} ${index !== footerLink.links.length -1 ? 'mb-4' :'mb-0'}`}>{link.name}</li>
        ))}
      </ul>
    </div>))}
    </div>
  </div>

<div className={`${styles.flexJustifyColCenter} ${styles.footer}`}> 
  <p className={styles.footerDivP}>2022 @HooBank</p>

  <div className={`${styles.flexrow} ${styles.footerDiv5}`}>
    {socialMedia.map((social, index) => (
      <img key = {social.id} src={social.icon} alt={social.id} className={`${styles.footerDivImg} ${index !==socialMedia.length -1 ? 'mr-6' : 'mr-0'}`} />
    ))}
  </div>
</div>

</section>
)

export default Footer;

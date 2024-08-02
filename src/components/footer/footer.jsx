import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Lamadev</div>
      <div className={styles.text}>
        Lama Creative Thoughts Agency @ ALl right receverd{" "}
      </div>
    </div>
  );
};

export default Footer;

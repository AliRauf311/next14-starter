import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContianer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className={styles.des}>
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precision Were worlds Our
            Special Team best consulting & finance solution provider. Wide range
            of web and software development services.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContianer}>
          <Image className={styles.img} src="/about.png" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

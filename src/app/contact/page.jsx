import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/contact.png" alt="" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input
            type="text"
            placeholder="Name and Sername"
            name=""
            value=""
            id=""
          />
          <input
            type="email"
            placeholder="Email Address"
            name=""
            value=""
            id=""
          />
          <input
            type="text"
            placeholder="Phone Number"
            name=""
            value=""
            id=""
          />
          <textarea placeholder="Message" name="" cols="30" rows="10" id="" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

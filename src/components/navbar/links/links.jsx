import React from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
const links = [
  {
    title: "Home Page",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

//temporary
const session = true;
const isAdmin = true;

const Links = () => {
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.item} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <navLink item={{ title: "login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;

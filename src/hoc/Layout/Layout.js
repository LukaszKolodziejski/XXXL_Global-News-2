import React from "react";
import classes from "./css/Layout.module.css";

const Layout = (props) => (
  <div className={classes.Layout}>
    <main className={classes.Content}>{props.children}</main>
    <footer className={classes.Footer}></footer>
  </div>
);

export default Layout;

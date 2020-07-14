import React, { Component } from "react";
import classes from "./css/Layout.module.css";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Layout}>
        <main className={classes.Content}>{this.props.children}</main>
        <footer className={classes.Footer}></footer>
      </div>
    );
  }
}

export default Layout;

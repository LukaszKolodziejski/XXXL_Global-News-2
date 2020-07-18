import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./ReturnButton.module.css";

const ReturnButton = (props) => (
  <Link to="/" className={styles.ReturnButton}>
    {props.children}
  </Link>
);

ReturnButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ReturnButton;

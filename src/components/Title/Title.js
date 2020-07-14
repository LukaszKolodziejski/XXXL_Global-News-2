import React from "react";
import PropTypes from "prop-types";
import styles from "./css/Title.module.css";

const Title = (props) => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Header__Title}>{props.name}</h1>
    </header>
  );
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;

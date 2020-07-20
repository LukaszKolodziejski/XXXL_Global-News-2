import React from "react";
import PropTypes from "prop-types";

import styles from "./css/Information.module.css";

const Description = (props) => {
  const { data } = props;
  return (
    <div className={styles.Description}>
      <h3 className={styles.Description__title}>{data.title}</h3>
      <div className={styles.Description__description}>{data.description}</div>
    </div>
  );
};

Description.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Description;

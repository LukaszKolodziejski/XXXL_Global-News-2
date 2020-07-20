import React from "react";
import PropTypes from "prop-types";

import styles from "./css/Information.module.css";

const Information = (props) => {
  const { data, target } = props;
  const convertDate = (date) => {
    const d = new Date(date);
    let newD = d.toString();
    newD = `${newD.slice(4, 10)}, ${newD.slice(11, 15)}`;
    return newD;
  };
  const convertPublishedAt = convertDate(data.publishedAt);

  return (
    <div>
      <span className={styles.Information}>{convertPublishedAt}</span>
      <span className={styles.Information}>{data.author}</span>
      <a className={styles.Information} href={data.url} target={target}>
        {data.source.name}
      </a>
    </div>
  );
};

Information.propTypes = {
  data: PropTypes.object.isRequired,
  target: PropTypes.string,
};

export default Information;

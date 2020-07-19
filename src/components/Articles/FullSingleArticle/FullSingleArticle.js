import React, { Fragment } from "react";
import PropTypes from "prop-types";

import styles from "./css/FullSingleArticle.module.css";
import Button from "../../UI/Button/Button";

const FullSingleArticle = (props) => {
  const { data } = props;
  const convertDate = (date) => {
    const d = new Date(date);
    let newD = d.toString();
    newD = `${newD.slice(4, 10)}, ${newD.slice(11, 15)}`;
    return newD;
  };
  const convertPublishedAt = convertDate(data.publishedAt);

  return (
    <Fragment>
      <article className={styles.FullSingleArticle}>
        <img
          className={styles.FullSingleArticle__image}
          src={data.urlToImage}
        ></img>
        <div className={styles.Information}>
          <span className={styles.Information__data}>{convertPublishedAt}</span>
          <span className={styles.Information__data}>{data.author}</span>
          <a className={styles.Information__data} href={data.url}>
            {data.source.name}
          </a>
          <h3 className={styles.FullSingleArticle__title}>{data.title}</h3>
          <div className={styles.FullSingleArticle__description}>
            {data.description}
          </div>
          <a target="_blank" href={data.url}>
            <Button btnType="Source">Go to Source</Button>
          </a>
        </div>
      </article>
    </Fragment>
  );
};

FullSingleArticle.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FullSingleArticle;

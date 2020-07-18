import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./css/SingleArticle.module.css";
import Button from "../../UI/Button/Button";

const SingleArticle = (props) => {
  const convertDate = (date) => {
    const d = new Date(date);
    let newD = d.toString();
    newD = `${newD.slice(4, 10)}, ${newD.slice(11, 15)}`;
    return newD;
  };

  const { data, id } = props;
  const convertPublishedAt = convertDate(data.publishedAt);
  return (
    <Fragment>
      <article className={styles.SingleArticle}>
        <img
          className={styles.SingleArticle__image}
          src={data.urlToImage}
        ></img>
        <div className={styles.Information}>
          <span className={styles.Information__data}>{convertPublishedAt}</span>
          <span className={styles.Information__data}>{data.author}</span>
          <a
            className={styles.Information__data}
            target="_blank"
            href={data.url}
          >
            {data.source.name}
          </a>
        </div>
        <h3 className={styles.SingleArticle__title}>{data.title}</h3>
        <div className={styles.SingleArticle__description}>
          {data.description}
        </div>
        <Link to="/article">
          <Button btnType="ReadMore" clicked={() => props.idHandler(id)}>
            Read More
          </Button>
        </Link>
      </article>
    </Fragment>
  );
};

SingleArticle.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default SingleArticle;

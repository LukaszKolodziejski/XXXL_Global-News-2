import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./css/FullSingleArticle.module.css";
import Button from "../../UI/Button/Button";
class FullSingleArticle extends Component {
  state = {};

  convertDate = (date) => {
    const d = new Date(date);
    let newD = d.toString();
    newD = `${newD.slice(4, 10)}, ${newD.slice(11, 15)}`;
    return newD;
  };

  render() {
    const { data } = this.props;
    const convertPublishedAt = this.convertDate(data.publishedAt);

    return (
      <Fragment>
        <article className={styles.FullSingleArticle}>
          <img
            className={styles.FullSingleArticle__image}
            src={data.urlToImage}
          ></img>
          <div className={styles.Information}>
            <span className={styles.Information__data}>
              {convertPublishedAt}
            </span>
            <span className={styles.Information__data}>{data.author}</span>
            <Link to={data.url} className={styles.Information__data}>
              {data.source.name}
            </Link>
            <h3 className={styles.FullSingleArticle__title}>{data.title}</h3>
            <div className={styles.FullSingleArticle__description}>
              {data.description}
            </div>
            <Link to={data.url} target="_blank">
              <Button btnType="Source">Go to Source</Button>
            </Link>
          </div>
        </article>
      </Fragment>
    );
  }
}

FullSingleArticle.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FullSingleArticle;

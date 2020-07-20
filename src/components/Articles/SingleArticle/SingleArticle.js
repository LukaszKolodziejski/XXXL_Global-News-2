import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./css/SingleArticle.module.css";
import Button from "../../UI/Button/Button";
import Information from "../../Information/Information";
import Description from "../../Information/Description";

const SingleArticle = React.memo((props) => {
  const { data, id } = props;
  return (
    <Fragment>
      <article className={styles.SingleArticle}>
        <img
          className={styles.SingleArticle__image}
          src={data.urlToImage}
        ></img>
        <div className={styles.SingleArticle__information}>
          <Information data={data} target="_blank" />
        </div>
        <Description data={data} />
        <Link to="/article">
          <Button btnType="ReadMore" clicked={() => props.idHandler(id)}>
            Read More
          </Button>
        </Link>
      </article>
    </Fragment>
  );
});

SingleArticle.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string,
};

export default SingleArticle;

import React from "react";
import PropTypes from "prop-types";

import styles from "./css/FullSingleArticle.module.css";
import Button from "../../UI/Button/Button";
import Information from "../../Information/Information";
import Description from "../../Information/Description";

const FullSingleArticle = React.memo((props) => {
  const { data } = props;
  return (
    // <Fragment>
    <article className={styles.FullSingleArticle}>
      <img
        className={styles.FullSingleArticle__image}
        src={data.urlToImage}
      ></img>
      <div className={styles.FullSingleArticle__information}>
        <Information data={data} />
        <Description data={data} />
        <a target="_blank" href={data.url}>
          <Button btnType="Source">Go to Source</Button>
        </a>
      </div>
    </article>
    // </Fragment>
  );
});

FullSingleArticle.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FullSingleArticle;

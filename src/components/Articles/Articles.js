import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions/index";
import SingleArticle from "./SingleArticle/SingleArticle";
import Button from "../../components/UI/Button/Button";
import styles from "./css/Articles.module.css";
import Spinner from "../../components/UI/Spinner/Spinner";

const Articles = (props) => {
  const [countArticles, setCountArticles] = useState(6);

  const articles = useSelector((state) => state.articlesIndex.articles);
  const loading = useSelector((state) => state.articlesIndex.loading);

  const dispatch = useDispatch();

  const onFetchArticles = () => dispatch(actions.fetchArticles());
  const onGetArticleID = (id) => dispatch(actions.getArticleID(id));

  useEffect(() => {
    onFetchArticles();
  }, []);

  const readMoreIdHandler = useCallback((id) => onGetArticleID(id), [
    onGetArticleID,
  ]);

  const loadMoreButtonHandler = useCallback(
    (count) => setCountArticles(countArticles + count),
    [setCountArticles]
  );

  let allArticles = [];
  let loadMoreButton;
  if (!loading) {
    for (let key in articles[2]) {
      key !== "id" &&
        key < countArticles &&
        allArticles.push(
          <SingleArticle
            key={key}
            id={key}
            data={articles[2][key]}
            idHandler={readMoreIdHandler}
          />
        );
    }
    loadMoreButton = (
      <Button btnType="LoadMoreButton" clicked={() => loadMoreButtonHandler(6)}>
        Show More
      </Button>
    );
  } else loadMoreButton = <Spinner />;

  return (
    <main className={styles.Articles}>
      <div className={styles.Articles__Content}>{allArticles}</div>
      {loadMoreButton}
    </main>
  );
};

export default Articles;

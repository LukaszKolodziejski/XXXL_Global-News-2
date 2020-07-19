import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import FullSingleArticle from "../../components/Articles/FullSingleArticle/FullSingleArticle";
import ReturnButton from "../../components/Navigation/ReturnButton/ReturnButton";
import Title from "../../components/Title/Title";

const Article = (props) => {
  const articles = useSelector((state) => state.articlesIndex.articles);
  const articleID = useSelector((state) => state.article.articleID);

  let fullArticleContent;
  for (let key in articles[2]) {
    key == articleID && (fullArticleContent = articles[2][key]);
  }

  return (
    <Fragment>
      <Title name={fullArticleContent.title} />
      <ReturnButton>Return to articles list</ReturnButton>
      <FullSingleArticle data={fullArticleContent} />
    </Fragment>
  );
};

export default Article;

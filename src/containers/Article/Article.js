import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FullSingleArticle from "../../components/Articles/FullSingleArticle/FullSingleArticle";
import ReturnButton from "../../components/Navigation/ReturnButton/ReturnButton";
import Title from "../../components/Title/Title";
class Article extends Component {
  state = {};

  render() {
    const { articles, articleID } = this.props;
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
  }
}

Article.propTypes = {
  articles: PropTypes.object.isRequired,
  articleID: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  articles: state.articlesIndex.articles,
  articleID: state.article.articleID,
});

export default connect(mapStateToProps)(Article);

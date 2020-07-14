import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as actions from "../../store/actions/index";
import SingleArticle from "./SingleArticle/SingleArticle";
import Button from "../../components/UI/Button/Button";
import styles from "./css/Articles.module.css";
import Spinner from "../../components/UI/Spinner/Spinner";
class Articles extends Component {
  state = {
    countArticles: 6,
  };

  componentDidMount = () => this.props.onFetchArticles();
  readMoreIdHandler = (id) => this.props.onGetArticleID(id);

  loadMoreButtonHandler = () =>
    this.setState((prevState) => ({
      countArticles: prevState.countArticles + 6,
    }));

  render() {
    const { countArticles } = this.state;
    const { loading, articles } = this.props;
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
              idHandler={this.readMoreIdHandler}
            />
          );
      }
      loadMoreButton = (
        <Button btnType="LoadMoreButton" clicked={this.loadMoreButtonHandler}>
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
  }
}

Articles.propTypes = {
  articles: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  articles: state.articlesIndex.articles,
  loading: state.articlesIndex.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchArticles: () => dispatch(actions.fetchArticles()),
  onGetArticleID: (id) => dispatch(actions.getArticleID(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);

import React, { Component, Fragment } from "react";

import Filters from "../../components/Navigation/Filters/Filters";
import Articles from "../../components/Articles/Articles";
import Title from "../../components/Title/Title";
class ArticleIndex extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Title name="Articles" />
        <Filters />
        <Articles />
      </Fragment>
    );
  }
}

export default ArticleIndex;

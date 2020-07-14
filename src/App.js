import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

import Layout from "./hoc/Layout/Layout";
import ArticlesIndex from "./containers/ArticlesIndex/ArticlesIndex";
import "./css/style.css";

const asyncArticle = asyncComponent(() => {
  return import("./containers/Article/Article");
});
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Layout>
          <Route path="/" exact component={ArticlesIndex} />
          <Route path="/article" component={asyncArticle} />
        </Layout>
      </Router>
    );
  }
}

export default App;

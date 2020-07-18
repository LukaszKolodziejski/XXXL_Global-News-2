import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Spinner from "./components/UI/Spinner/Spinner";
import ArticlesIndex from "./containers/ArticlesIndex/ArticlesIndex";
import "./css/style.css";

const AsyncArticle = React.lazy(() => import("./containers/Article/Article"));

const App = () => (
  <Router>
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Route path="/" exact component={ArticlesIndex} />
        <Route
          path="/article"
          render={(props) => <AsyncArticle {...props} />}
        />
      </Suspense>
    </Layout>
  </Router>
);

export default App;

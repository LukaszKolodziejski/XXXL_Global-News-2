import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import ArticlesIndex from "./containers/ArticlesIndex/ArticlesIndex";
import "./css/style.css";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
const AsyncArticle = React.lazy(() => import("./containers/Article/Article"));

configure({ adapter: new Adapter() });

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render <Layout /> ", () => {
    expect(wrapper.find(Layout)).toHaveLength(1);
  });

  it("should contains <Router /> with component: ArticlesIndex ", () => {
    expect(
      wrapper.contains(<Route path="/" exact component={ArticlesIndex} />)
    ).toEqual(true);
  });

  it("shouldn't render <AsyncArticle /> without choose path ", () => {
    expect(wrapper.find(AsyncArticle)).toHaveLength(0);
  });

  it("should render <Route /> ", () => {
    expect(wrapper.find(Route)).toHaveLength(2);
  });
});

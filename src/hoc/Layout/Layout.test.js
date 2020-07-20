import React from "react";

import classes from "./css/Layout.module.css";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Layout from "./Layout";

configure({ adapter: new Adapter() });

describe("<Layout />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it("should render <Layout /> which has only one main ", () => {
    expect(wrapper.find("main")).toHaveLength(1);
  });

  it("should contain <a className={styles.Layout} /> with classes Footer", () => {
    expect(
      wrapper.contains(<footer className={classes.Footer}></footer>)
    ).toEqual(true);
  });

  it("should render <Layout /> which has only one footer ", () => {
    expect(wrapper.find("footer")).toHaveLength(1);
  });
});

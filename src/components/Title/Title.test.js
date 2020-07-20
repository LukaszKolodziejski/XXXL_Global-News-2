import React from "react";

import styles from "./css/Title.module.css";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Title from "./Title";

configure({ adapter: new Adapter() });

const name = "";

describe("<Title />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Title data={name} />);
  });

  it("should render <Title /> ", () => {
    expect(wrapper.find("header")).toHaveLength(1);
  });

  it("shouldn't contain h2, only h1", () => {
    expect(
      wrapper.contains(<h2 className={styles.Header__Title}>{name}</h2>)
    ).toEqual(false);
  });

  it("should render only one Link <a> <a/> ", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});

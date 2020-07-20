import React from "react";

import styles from "./css/Information.module.css";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Information from "./Information";
import Description from "./Description";

configure({ adapter: new Adapter() });
const target = "";
const data = {
  source: {
    id: null,
    name: "",
  },
  author: "",
  title: "",
  description: "",
  url: "",
  urlToImage: "",
  publishedAt: "",
  content: "",
};

describe("<Information />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Information data={data} />);
  });

  it("should render <Information /> ", () => {
    expect(wrapper.find("span")).toHaveLength(2);
  });

  it("should contain <a className={styles.Information} /> with target", () => {
    expect(
      wrapper.contains(
        <a className={styles.Information} href={data.url}>
          {data.source.name}
        </a>
      )
    ).toEqual(true);
  });

  it("should render only one Link <a> <a/> ", () => {
    expect(wrapper.find("a")).toHaveLength(1);
  });

  it("should contains information about author", () => {
    expect(
      wrapper.contains(
        <span className={styles.Information}>{data.author}</span>
      )
    ).toEqual(true);
  });
});

describe("<Description />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Description data={data} />);
  });

  it("should render <Description /> ", () => {
    expect(wrapper.find("h3")).toHaveLength(1);
  });

  it("should contain title of description", () => {
    expect(
      wrapper.contains(
        <h3 className={styles.Description__title}>{data.title}</h3>
      )
    ).toEqual(true);
  });

  it("should contains description of this article", () => {
    expect(
      wrapper.contains(
        <div className={styles.Description__description}>
          {data.description}
        </div>
      )
    ).toEqual(true);
  });
});

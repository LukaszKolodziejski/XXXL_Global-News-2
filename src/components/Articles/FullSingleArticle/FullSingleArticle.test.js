import React from "react";

import styles from "./css/FullSingleArticle.module.css";
import Button from "../../UI/Button/Button";
import Information from "../../Information/Information";
import Description from "../../Information/Description";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FullSingleArticle from "./FullSingleArticle";

configure({ adapter: new Adapter() });

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

describe("<FullSingleArticle />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FullSingleArticle data={data} />);
  });

  it("should render <Information /> ", () => {
    expect(wrapper.find(Information)).toHaveLength(1);
  });

  it("should contain <Button btnType='Source'> ", () => {
    expect(
      wrapper.contains(<Button btnType="Source">Go to Source</Button>)
    ).toEqual(true);
  });

  it("should render only one <Description /> ", () => {
    expect(wrapper.find(Description)).toHaveLength(1);
  });

  it("should contains image with styles ", () => {
    expect(
      wrapper.contains(
        <img
          className={styles.FullSingleArticle__image}
          src={data.urlToImage}
        ></img>
      )
    ).toEqual(true);
  });

  it("should render <Button /> ", () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});

import React from "react";

import styles from "./css/FullSingleArticle.module.css";
import Button from "../../UI/Button/Button";
import Information from "../../Information/Information";
import Description from "../../Information/Description";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SingleArticle from "./SingleArticle";

configure({ adapter: new Adapter() });
const id = 0;
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

describe("<SingleArticle />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SingleArticle data={data} />);
  });

  it("should render <Information /> ", () => {
    expect(wrapper.find(Information)).toHaveLength(1);
  });

  it("shouldn't contain <Button btnType='ReadMore'> without clicked function", () => {
    expect(
      wrapper.contains(<Button btnType="ReadMore">Read More</Button>)
    ).toEqual(false);
  });

  it("should render only one <Description /> ", () => {
    expect(wrapper.find(Description)).toHaveLength(1);
  });

  it("should contains image with styles ", () => {
    expect(
      wrapper.contains(
        <img
          className={styles.SingleArticle__image}
          src={data.urlToImage}
        ></img>
      )
    ).toEqual(true);
  });

  it("should render <Button /> ", () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});

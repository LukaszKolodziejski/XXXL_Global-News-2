import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../../../store/actions/index";

import Button from "../../../UI/Button/Button";

const ClearFilters = (props) => {
  const filters = useSelector((state) => state.articlesIndex.filters);

  const dispatch = useDispatch();

  const onClearButtonHandler = (filters) =>
    dispatch(actions.clearButtonHandler(filters));

  const clearButtonHandler = () => {
    filters.forEach((filter) => {
      filter.data.values.forEach((value) => (value.active = false));
      filter.data.dropdownName = filter.data.name;
      filter.data.activeValue = "";
      filter.api.active = false;
      filter.api.query = filter.api.startQuery;
    });
    props.onClear();
    onClearButtonHandler(filters);
  };
  return (
    <Button btnType="Clearbtn" clicked={clearButtonHandler}>
      Clear Filters
    </Button>
  );
};

ClearFilters.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default ClearFilters;

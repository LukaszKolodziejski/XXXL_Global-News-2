import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../../../store/actions/index";

import Button from "../../../UI/Button/Button";

class ClearFilters extends Component {
  state = {};

  clearButtonHandler = () => {
    const { filters } = { ...this.props };
    filters.forEach((filter) => {
      filter.data.values.forEach((value) => (value.active = false));
      filter.data.dropdownName = filter.data.name;
      filter.data.activeValue = "";
      filter.api.active = false;
      filter.api.query = filter.api.startQuery;
    });
    this.props.onClear();
    this.props.onClearButtonHandler(filters);
  };

  render() {
    return (
      <Button btnType="Clearbtn" clicked={this.clearButtonHandler}>
        Clear Filters
      </Button>
    );
  }
}

ClearFilters.propTypes = {
  filters: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  filters: state.articlesIndex.filters,
});

const mapDispatchToProps = (dispatch) => ({
  onClearButtonHandler: (filters) =>
    dispatch(actions.clearButtonHandler(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClearFilters);

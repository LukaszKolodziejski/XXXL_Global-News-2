import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../../store/actions/index";

import Button from "../../UI/Button/Button";
import ClearFilters from "./ClearFilters/ClearFilters";
import styles from "./css/Filters.module.css";

class Filters extends Component {
  state = {
    change: false,
  };

  componentDidUpdate = () =>
    this.props.onFetchArticlesFilters(this.props.filters);

  dropdownContentHandler = (value, filterId) => {
    const { filters } = { ...this.props };

    filters.forEach((filter) => {
      const { activeValue } = filter.data;
      filter.data.values.forEach((value) => (value.active = false));
      if (filter.id === filterId) {
        if (activeValue !== value.name) {
          value.active = true;
          filter.data.dropdownName = value.name;
          filter.data.activeValue = value.name;
          filter.api.active = true;
          filterId === "Dates"
            ? (filter.api.query = this.getIsoDate(value.query))
            : (filter.api.query = value.query);
        } else {
          value.active = false;
          filter.data.dropdownName = filter.data.name;
          filter.data.activeValue = "";
          filter.api.active = false;
          filter.api.query = filter.api.startQuery;
        }
      }
    });

    this.setState({ change: true });
    this.props.onDropdownContentHandler(filters);
  };

  getIsoDate = (time) => {
    let iso;
    const today = new Date();
    const week = new Date();
    const month = new Date();
    week.setDate(week.getDate() - 6);
    month.setDate(month.getDate() - 30);
    time === "today" && (iso = today);
    time === "week" && (iso = week);
    time === "month" && (iso = month);
    iso = iso.toISOString().toString().slice(0, 10);
    return iso;
  };

  clearFiltersHandler = () => this.setState({ change: true });

  render() {
    const { filters } = this.props;

    const allFilters = filters.map((filter) => (
      <div key={filter.id} className={styles.Dropdown}>
        <Button btnType="Dropbtn">{filter.data.dropdownName}</Button>
        <div className={styles.Dropdown__content}>
          {filter.data.values.map((value) => (
            <div
              key={value.name}
              className={
                value.active ? styles.Dropdown__content___active : null
              }
              onClick={() => this.dropdownContentHandler(value, filter.id)}
            >
              {value.name}
            </div>
          ))}
        </div>
      </div>
    ));

    return (
      <Fragment>
        <nav className={styles.Filters}>
          {allFilters}
          <ClearFilters onClear={this.clearFiltersHandler} />
        </nav>
      </Fragment>
    );
  }
}

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  filters: state.articlesIndex.filters,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchArticlesFilters: (filters) =>
    dispatch(actions.fetchArticlesFilters(filters)),
  onDropdownContentHandler: (filters) =>
    dispatch(actions.dropdownContentHandler(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

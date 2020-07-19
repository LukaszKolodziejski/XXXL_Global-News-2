import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../../store/actions/index";

import Button from "../../UI/Button/Button";
import ClearFilters from "./ClearFilters/ClearFilters";
import styles from "./css/Filters.module.css";

const Filters = (props) => {
  const [change, setChange] = useState(false);

  const filters = useSelector((state) => state.articlesIndex.filters);

  const dispatch = useDispatch();

  const onFetchArticlesFilters = (filters) =>
    dispatch(actions.fetchArticlesFilters(filters));
  const onDropdownContentHandler = (filters) =>
    dispatch(actions.dropdownContentHandler(filters));

  useEffect(() => {
    onFetchArticlesFilters(filters);
    setChange(false);
  });

  const dropdownContentHandler = (value, filterId) => {
    const newFilters = filters;
    newFilters.forEach((filter) => {
      const { activeValue } = filter.data;
      filter.data.values.forEach((value) => (value.active = false));
      if (filter.id === filterId) {
        if (activeValue !== value.name) {
          value.active = true;
          filter.data.dropdownName = value.name;
          filter.data.activeValue = value.name;
          filter.api.active = true;
          filterId === "Dates"
            ? (filter.api.query = getIsoDate(value.query))
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
    setChange(true);
    onDropdownContentHandler(newFilters);
  };

  const getIsoDate = (time) => {
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

  const clearFiltersHandler = useCallback(
    (newChangeState) => {
      setChange(newChangeState);
    },
    [setChange]
  );

  const allFilters = filters.map((filter) => (
    <div key={filter.id} className={styles.Dropdown}>
      <Button btnType="Dropbtn">{filter.data.dropdownName}</Button>
      <div className={styles.Dropdown__content}>
        {filter.data.values.map((value) => (
          <div
            key={value.name}
            className={value.active ? styles.Dropdown__content___active : null}
            onClick={() => dropdownContentHandler(value, filter.id)}
          >
            {value.name}
          </div>
        ))}
      </div>
    </div>
  ));

  const clearFilters = useMemo(
    () => <ClearFilters onClear={clearFiltersHandler} />,
    [clearFiltersHandler]
  );

  return (
    <nav className={styles.Filters}>
      {allFilters}
      {clearFilters}
    </nav>
  );
};

Filters.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default Filters;

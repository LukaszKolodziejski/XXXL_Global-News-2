import * as actionTypes from "./actionTypes";
import axios from "../../axios-newsapi";

const MAIN_API = `/everything?q=a&apiKey=`;
const API_KEY = "21dec1c6cdd34f6986cecd09f8d9c71e";
const API = `${MAIN_API}${API_KEY}`;

export const fetchArticlesStart = () => ({
  type: actionTypes.FETCH_ARTICLES_START,
});

export const fetchArticlesSuccess = (articles) => ({
  type: actionTypes.FETCH_ARTICLES_SUCCESS,
  articles,
});

export const fetchArticlesFail = (error) => ({
  type: actionTypes.FETCH_ARTICLES_FAIL,
  error,
});

// Redux-Saga
// export const fetchArticles = () => ({
//   type: actionTypes.FETCH_ARTICLES,
// });

// Redux-Thunk
export const fetchArticles = () => (dispatch) => {
  dispatch(fetchArticlesStart());
  axios
    .get(API)
    .then((res) => {
      console.log(res.data);
      const fetchArticles = [];
      for (let key in res.data) {
        fetchArticles.push({
          ...res.data[key],
          id: key,
        });
      }
      dispatch(fetchArticlesSuccess(fetchArticles));
    })
    .catch((err) => {
      dispatch(fetchArticlesFail(err));
    });
};

export const fetchArticlesFiltersStart = () => ({
  type: actionTypes.FETCH_ARTICLES_FILTERS_START,
});

export const fetchArticlesFiltersSuccess = (articles) => ({
  type: actionTypes.FETCH_ARTICLES_FILTERS_SUCCESS,
  articles,
});

export const fetchArticlesFiltersFail = (error) => ({
  type: actionTypes.FETCH_ARTICLES_FILTERS_FAIL,
  error,
});

// Redux-Saga
// export const fetchArticlesFilters = () => ({
//   type: actionTypes.FETCH_ARTICLES_FILTERS,
// });

// Redux-Thunk
export const fetchArticlesFilters = (filters) => (dispatch) => {
  dispatch(fetchArticlesFiltersStart());
  const queryApi = filters
    .map((filter) =>
      filter.api.active
        ? `${filter.api.searchQuery}${filter.api.query}&`
        : filter.api.mainFullStartQuery
    )
    .join("");
  const newApi = `/everything?${queryApi}apiKey=${API_KEY}`;
  axios
    .get(newApi)
    .then((res) => {
      const fetchArticles = [];
      for (let key in res.data) {
        fetchArticles.push({
          ...res.data[key],
          id: key,
        });
      }
      dispatch(fetchArticlesFiltersSuccess(fetchArticles));
    })
    .catch((err) => {
      dispatch(fetchArticlesFiltersFail(err));
    });
};

export const dropdownContentHandler = (filters) => ({
  type: actionTypes.DROPDOWN_CONTENT,
  filters,
});

export const clearButtonHandler = (filters) => ({
  type: actionTypes.CLEAR_BUTTON,
  filters,
});

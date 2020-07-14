import { put } from "redux-saga/effects";
import axios from "../../axios-newsapi";

import * as actions from "../actions/index";

const MAIN_API = `/everything?q=a&apiKey=`;
const API_KEY = "21dec1c6cdd34f6986cecd09f8d9c71e";
const API = `${MAIN_API}${API_KEY}`;

export function* fetchArticlesSaga(action) {
  yield put(actions.fetchArticlesStart());
  try {
    const res = yield axios.get(API);
    const fetchArticles = [];
    for (let key in res.data) {
      fetchArticles.push({
        ...res.data[key],
        id: key,
      });
    }
    yield put(actions.fetchArticlesSuccess(fetchArticles));
  } catch (err) {
    console.log(err);
    yield put(actions.fetchArticlesFail(err));
  }
}

export function* fetchArticlesFiltersSaga(action) {
  yield put(actions.fetchArticlesFiltersStart());
  try {
    const queryApi = yield action.filters
      .map((filter) =>
        filter.api.active
          ? `${filter.api.searchQuery}${filter.api.query}&`
          : filter.api.mainFullStartQuery
      )
      .join("");
    const newApi = `/everything?${queryApi}apiKey=${API_KEY}`;
    const res = yield axios.get(newApi);
    const fetchArticles = [];
    for (let key in res.data) {
      fetchArticles.push({
        ...res.data[key],
        id: key,
      });
    }
    yield put(actions.fetchArticlesFiltersSuccess(fetchArticles));
  } catch (err) {
    yield put(actions.fetchArticlesFiltersFail(err));
  }
}

import { takeEvery, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import { fetchArticlesSaga, fetchArticlesFiltersSaga } from "./articlesIndex";

export function* watchArticlesIndex() {
  yield all([
    takeEvery(actionTypes.FETCH_ARTICLES, fetchArticlesSaga),
    takeEvery(actionTypes.FETCH_ARTICLES_FILTERS, fetchArticlesFiltersSaga),
  ]);
}

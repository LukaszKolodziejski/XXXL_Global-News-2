import * as actionTypes from "./actionTypes";

export const getArticleID = (articleID) => ({
  type: actionTypes.GET_ARTICLE_ID,
  articleID,
});

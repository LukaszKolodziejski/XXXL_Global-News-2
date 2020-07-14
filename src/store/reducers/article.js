import * as actionTypes from "../actions/actionTypes";

const initialState = {
  articleID: 0,
};

const getArticleID = (state, action) => ({
  ...state,
  articleID: action.articleID,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLE_ID:
      return getArticleID(state, action);
    default:
      return state;
  }
};

export default reducer;

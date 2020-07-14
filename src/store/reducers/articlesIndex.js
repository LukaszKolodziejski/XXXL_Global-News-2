import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  articles: [],
  filters: [
    {
      id: "Topic",
      api: {
        mainFullStartQuery: "q=a&",
        searchQuery: "q=",
        startQuery: "a",
        query: "",
        active: false,
      },
      data: {
        name: "Topic",
        dropdownName: "Topic",
        values: [
          { query: "tech", name: "Tech" },
          { query: "sports", name: "Sports" },
          { query: "travel", name: "Travel" },
          { query: "politics", name: "Politics" },
        ],
        activeValue: "",
      },
    },
    {
      id: "Dates",
      api: {
        mainFullStartQuery: "",
        searchQuery: "from=",
        startQuery: "",
        query: "",
        active: false,
      },
      data: {
        name: "Time",
        dropdownName: "Time",
        values: [
          { query: "month", name: "This month" },
          { query: "week", name: "This week" },
          { query: "today", name: "Today" },
        ],
        activeValue: "",
      },
    },
    {
      id: "SortBy",
      api: {
        mainFullStartQuery: "",
        searchQuery: "sortBy=",
        startQuery: "",
        query: "",
        active: false,
      },
      data: {
        name: "Sort By",
        dropdownName: "Sort By",
        values: [
          { active: false, query: "popularity", name: "Popularity" },
          { active: false, query: "publishedAt", name: "Publication Date" },
        ],
        activeValue: "",
      },
    },
  ],
};

const fetchArticlesStart = (state, action) => ({
  ...state,
  loading: true,
});

const fetchArticlesSuccess = (state, action) => ({
  ...state,
  loading: false,
  articles: action.articles,
});

const fetchArticlesFail = (state, action) => ({
  ...state,
  loading: false,
});

const fetchArticlesFiltersStart = (state, action) => ({
  ...state,
  loading: true,
});

const fetchArticlesFiltersSuccess = (state, action) => ({
  ...state,
  loading: false,
  articles: action.articles,
});

const fetchArticlesFiltersFail = (state, action) => ({
  ...state,
  loading: false,
});

const dropdownContentHandler = (state, action) => ({
  ...state,
  filters: action.filters,
});

const clearButtonHandler = (state, action) => ({
  ...state,
  filters: action.filters,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_START:
      return fetchArticlesStart(state, action);
    case actionTypes.FETCH_ARTICLES_SUCCESS:
      return fetchArticlesSuccess(state, action);
    case actionTypes.FETCH_ARTICLES_FAIL:
      return fetchArticlesFail(state, action);
    case actionTypes.FETCH_ARTICLES_FILTERS_START:
      return fetchArticlesFiltersStart(state, action);
    case actionTypes.FETCH_ARTICLES_FILTERS_SUCCESS:
      return fetchArticlesFiltersSuccess(state, action);
    case actionTypes.FETCH_ARTICLES_FILTERS_FAIL:
      return fetchArticlesFiltersFail(state, action);
    case actionTypes.DROPDOWN_CONTENT:
      return dropdownContentHandler(state, action);
    case actionTypes.CLEAR_BUTTON:
      return clearButtonHandler(state, action);
    default:
      return state;
  }
};

export default reducer;

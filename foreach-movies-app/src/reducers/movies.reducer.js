const initialState = {
  results: [],
  total_pages: 0,
  page: 1
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        results: action.payload.results,
        total_pages: action.payload.total_pages,
        page: action.payload.page
      };
    default:
      return state;
  }
}
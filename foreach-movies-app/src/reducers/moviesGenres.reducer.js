const initialState = {};

export default function moviesGenresReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES_GENRES':
      return action.payload;
    default:
      return state;
  }
}

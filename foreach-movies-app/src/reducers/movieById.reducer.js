const initialState = {};

export default function movieIdReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ID':
      return action.payload;
    default:
      return state;
  }
}

import { SET_COMMENT_DATA, SET_CURRENT_POST } from "../actionsTypes";

const InittialState = {
  comments: [],
  post: null,
};
const reducer = (state = InittialState, action) => {
  switch (action.type) {
    case SET_COMMENT_DATA:
      return {
        ...state,
        comments: action.data,
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        post: action.data,
      };
    default:
      return state;
  }
};

export default reducer;

import { SET_POST_DATA } from "../actionsTypes";

const InittialState = {
  posts: [],
};
const reducer = (state = InittialState, action) => {
  switch (action.type) {
    case SET_POST_DATA:
      return {
        ...state,
        posts: action.data,
      };
    default:
      return state;
  }
};

export default reducer;

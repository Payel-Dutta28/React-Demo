import { FETCH_POSTS, NEW_POSTS } from "../actions/types";
const initialState = {
  items: [],
  item: {}
};
function postreducer(state = initialState, action) {
  console.log("Post Reducer me ghusa....");
  switch (action.type) {
    case "FETCH_POSTS":
      console.log("FETCH_POSTS");
      return {
        ...state,
        items: action.payload
      };
    case "NEW_POSTS":
      console.log("NEW_POSTS");
      return {
        items: [...state.items, action.payload],
        item: action.payload
      };
    default:
      return state;
  }
}

export default postreducer;

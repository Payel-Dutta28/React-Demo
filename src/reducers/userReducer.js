const initstate = {
  username: "Max",
  age: 0
};
function userreducer(state = initstate, action) {
  console.log("Reducer me ghusa....", action.type);
  switch (action.type) {
    case "SET_NAME":
      console.log("ACTION===", action);
      state = {
        ...state,
        username: action.name
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
    default:
      state = { ...state };
  }
  return state;
}
export default userreducer;

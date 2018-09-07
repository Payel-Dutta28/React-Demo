export function add(number) {
  return dispatch => {
    console.log("dispatch", number);
    dispatch({
      type: "ADD",
      payload: number
    });
  };
}
export function sub(number) {
  return {
    type: "SUB",
    payload: number
  };
}

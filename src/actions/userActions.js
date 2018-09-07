// export function setUsrName(name) {
//   console.log("inside set usr name", name);
//   return {
//     type: "SET_NAME",
//     name
//   };
//   // return dispatch => {
//   //   console.log(dispatch);
//   //   dispatch({
//   //     type: "SET_NAME",
//   //     name
//   //   });
//   // };
// }

// export const setName = name => {
//   console.log("inside set name", name);
//   return dispatch => name => {
//     dispatch(this.setUsrName(name));
//   };
// };

export const setName = name => {
  return dispatch => {
    dispatch({
      type: "SET_NAME",
      name
    });
  };
};

export function setAge(age) {
  return {
    type: "SET_AGE",
    payload: age
  };
}

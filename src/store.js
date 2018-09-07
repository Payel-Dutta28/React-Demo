import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import Mathreducer from "./reducers/mathReducer";
import Userreducer from "./reducers/userReducer";
import PostReducer from "./reducers/postReducer";
import thunk from "redux-thunk";
// import promise from "redux-promise-middleware";

const initialState = {};
const reducers = combineReducers({ Mathreducer, Userreducer, PostReducer });
const middlewares = [logger, thunk];

// export default createStore(
//   combineReducers({ Mathreducer, Userreducer }),
//   {},
//   applyMiddleware(middleware)
// );
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);
export default store;

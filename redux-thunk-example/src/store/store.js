import { countReducer } from "../reducers/count";

import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

const rootReducer = combineReducers({
  count: countReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

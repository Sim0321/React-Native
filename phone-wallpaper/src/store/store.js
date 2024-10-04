import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { favoriteListReducer } from "../reducers/favoriteReducer";

const rootReducer = combineReducers({
  favorite: favoriteListReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

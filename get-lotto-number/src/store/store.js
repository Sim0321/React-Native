import AsyncStorage from "@react-native-async-storage/async-storage";
import { lottoNumberReducers } from "../reducers/lottoNumbers";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  numbers: lottoNumberReducers,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage: AsyncStorage,
    stateReconciler: hardSet,
  },
  rootReducer
);

// const store = createStore(persistedReducer);
export const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);

import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import rootReducer, { IRootState } from ".";

const defaultMiddlewares = [thunk];
const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

const composedMiddlewares = (middlewares) =>
  process.env.NODE_ENV === "development"
    ? composeEnhancers(applyMiddleware(...defaultMiddlewares, ...middlewares))
    : composeEnhancers(applyMiddleware(...defaultMiddlewares, ...middlewares));

const initialize = (initialState?: IRootState, middlewares = []) =>
  createStore(rootReducer, initialState, composedMiddlewares(middlewares));

export default initialize;

import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./auth/reducers";
import { checkAuth } from "./auth/actions";

const reducers = combineReducers({
  auth: authReducer,
});

const composeEnhancer =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunkMiddleware)
    : composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(reducers, composeEnhancer);

store.dispatch(checkAuth());

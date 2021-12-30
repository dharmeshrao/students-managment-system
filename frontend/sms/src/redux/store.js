import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { userReducer } from "./users/reducer";
import { authReducer } from "./auth/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});
export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

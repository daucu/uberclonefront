import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlices";
import thunk from "redux-thunk";
import authSlice from "./Reducers/AuthReducer";

const combined = combineReducers({
  nav: navReducer,
  auth: authSlice,
});

export const Store = configureStore({
   reducer: combined,
    middleware: [thunk],
});

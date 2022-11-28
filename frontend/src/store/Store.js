import { configureStore,combineReducers } from "@reduxjs/toolkit";

import authSlice from "./slices/AuthSlice";
import appSlice from "./slices/AppSlice";

const reducers = combineReducers({
  authSlice,
  appSlice
});

export const store = configureStore({
  reducer: reducers,
});

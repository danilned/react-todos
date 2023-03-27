import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import appSlice from "./slices/appSlice";

const rootReducer = combineReducers({
  todos: todoSlice,
  app: appSlice
});

export const store = configureStore({
  reducer: rootReducer
});

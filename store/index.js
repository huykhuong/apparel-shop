import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice.js";

const store = configureStore({
  reducer: { uiReducer: uiReducer },
});

export default store;

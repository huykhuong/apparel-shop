import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice.js";
import cartReducer from "./cart-slice.js";

const store = configureStore({
  reducer: { cartReducer: cartReducer, uiReducer: uiReducer },
});

export default store;

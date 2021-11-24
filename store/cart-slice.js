import { createSlice } from "@reduxjs/toolkit";

const initialSliceState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialSliceState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price * newItem.amount,
          size: newItem.size,
          amount: newItem.amount,
          name: newItem.name,
          image: newItem.imgUrl,
        });
        state.totalQuantity++;
        state.totalPrice = state.totalPrice + newItem.price * newItem.amount;
      } else {
        existingItem.amount = existingItem.amount + newItem.amount;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.amount;
        state.totalPrice = state.totalPrice + newItem.price * newItem.amount;
      }
    },
    increaseItemAmount(state, action) {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      existingItem.amount++;
      existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      state.totalPrice = state.totalPrice + existingItem.price;
    },
    decreaseItemAmount(state, action) {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItem.amount > 1) {
        existingItem.amount--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalPrice = state.totalPrice - existingItem.price;
      } else {
        state.totalQuantity = state.totalQuantity--;
        state.totalPrice = state.totalPrice - existingItem.price;
        state.items = state.items.filter(
          (item) =>
            item.id !== action.payload.id || item.size !== action.payload.size
        );
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (item) =>
          item.id !== action.payload.id || item.size !== action.payload.size
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

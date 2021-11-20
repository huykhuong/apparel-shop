import { createSlice } from "@reduxjs/toolkit";

const initialSliceState = {
  toggleOpenCart: false,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialSliceState,
  reducers: {
    toggleOpenCart(state) {
      state.toggleOpenCart = !state.toggleOpenCart;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;

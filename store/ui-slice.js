import { createSlice } from "@reduxjs/toolkit";

const initialSliceState = {
  toggleOpenCart: false,
  toggleOpenMobileSearchBar: false,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialSliceState,
  reducers: {
    toggleOpenCart(state) {
      state.toggleOpenCart = !state.toggleOpenCart;
    },
    toggleOpenMobileSearchBar(state) {
      state.toggleOpenMobileSearchBar = !state.toggleOpenMobileSearchBar;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;

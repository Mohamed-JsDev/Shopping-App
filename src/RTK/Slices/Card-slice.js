import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  initialState: [],
  name: "CardSlice",
  reducers: {
    addToCard: (state, action) => {
      const findProduct = state.find((p) => p.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productCount = { ...action.payload, quantity: 1 };
        state.push(productCount);
      }
    },
    removeItem: (state, action) => {
      return state.filter((p) => p.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});
export const { addToCard, removeItem, clear } = CardSlice.actions;
export default CardSlice.reducer;

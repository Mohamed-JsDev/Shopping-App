import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchCategory = createAsyncThunk(
  "productsSlice/FetchCategory",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    return data;
  }
);
const CategorySlice = createSlice({
  initialState: [],
  name: "CategorySlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchCategory.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
// export const {} = CategorySlice.actions;
export const selectCategory = (state) => state.CategorySlice;
export default CategorySlice.reducer;

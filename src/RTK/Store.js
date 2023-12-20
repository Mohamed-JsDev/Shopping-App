import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './Slices/Product-slice';
import CardSlice from "./Slices/Card-slice";
import CategorySlice from "./Slices/Category-Slice"
export const  store = configureStore({
  reducer : {
    products : productsSlice,
    Card :  CardSlice,
    category: CategorySlice
  }
})
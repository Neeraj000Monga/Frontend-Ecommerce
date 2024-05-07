import { configureStore } from "@reduxjs/toolkit";
import darkSlice from "./features/darkSlice";
import AddToItemSlice from "./features/AddToItemSlice";

const store = configureStore({
  reducer: {
    auth: darkSlice,
    addToItem: AddToItemSlice,
  },
});

export default store;

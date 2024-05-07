import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addlist: JSON.parse(localStorage.getItem("addlist")) || [],
};

const addToItemSlice = createSlice({
  name: "addToItem",
  initialState,
  reducers: {
    toggleItem: (state, action) => {
      const { id } = action.payload;
      const index = state.addlist.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.addlist.splice(index, 1);
      } else {
        state.addlist.push(action.payload);
      }
      localStorage.setItem("addlist", JSON.stringify(state.addlist));
    },
  },
});

export const { toggleItem } = addToItemSlice.actions;

export default addToItemSlice.reducer;

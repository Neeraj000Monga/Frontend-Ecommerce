import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: localStorage.getItem("darkmode") === "true" ? true : false,
};

const darkSlice = createSlice({
  name: "auth",                                       
  initialState,
  reducers: {
    mode: (state) => {
      state.darkmode = !state.darkmode;
      localStorage.setItem("darkmode", state.darkmode);
    },
  },
});

export const { mode } = darkSlice.actions;

export default darkSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   darkmode: false,
// };

// const darkSlice = createSlice({
//   name: "auth",                                       
//   initialState,
//   reducers: {
//     mode: (state) => {
//       state.darkmode = !state.darkmode
//     },
//   },
// });



// export const {mode} = darkSlice.actions;

// export default darkSlice.reducer;

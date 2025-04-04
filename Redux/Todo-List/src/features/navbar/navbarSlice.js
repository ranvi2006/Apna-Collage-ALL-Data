import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bg: "white",
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    changeBG: (state) => {
      state.bg = state.bg === "white" ? "black" : "white";
    },
  },
});

export const { changeBG } = navbarSlice.actions;
export default navbarSlice.reducer;

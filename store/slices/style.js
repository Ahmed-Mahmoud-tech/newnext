"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: true,
  popUpContent: "", // auth
  confirmationMessage: "",
  confirmationFun: "",
  currentComponent: {},
  preloader: true,
};

export const styleReducer = createSlice({
  name: "style",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
    changePop: (state, action) => {
      state.popUpContent = action.payload;
    },
    changeComponent: (state, action) => {
      state.currentComponent = action.payload;
    },
    changeMessage: (state, action) => {
      state.confirmationMessage = action.payload;
    },
    changeConfirmationFun: (state, action) => {
      state.confirmationFun = action.payload;
    },
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeMode,
  changePop,
  changeConfirmationFun,
  changeMessage,
  changeComponent,
  changePreloader,
} = styleReducer.actions;

export default styleReducer.reducer;

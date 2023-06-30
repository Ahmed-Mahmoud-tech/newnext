"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {},
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.info = {};
    },
    addUserData: (state, action) => {
      for (const [key, value] of Object.entries(action.payload)) {
        state.info[key] = value;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserData, clearUserData } = userReducer.actions;

export default userReducer.reducer;

"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideos: [],
  page: 0,
};

export const videoResultReducer = createSlice({
  name: "videoResult",
  initialState,
  reducers: {
    clear: (state) => {
      state.currentVideos = [];
    },
    searchVideos: (state, action) => {
      state.currentVideos = action.payload;
    },
    moreVideos: (state, action) => {
      if (action.payload.page != state.page) {
        state.currentVideos.push(action.payload.data);
        state.page = action.payload.page;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { clear, searchVideos } = videoResultReducer.actions;

export default videoResultReducer.reducer;

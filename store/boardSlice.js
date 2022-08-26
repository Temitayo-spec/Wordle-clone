/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable quotes */
import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    boardInitial: [
      ["", "", "", "e", ""],
      ["e", "", "d", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "q", "", "", ""],
      ["", "q", "", "e", ""],
    ],
    currentAttempt: {
      attempt: 0,
      position: 0,
    },
  },
  reducers: {
    setBoard: (state, action) => {
      state.boardInitial = [...action.payload];
    },
    setCurrentAttempt: (state, action) => {
      state.currentAttempt = action.payload;
    },
  },
});

export const boardState = (state) => state.board.boardInitial;

export const { setBoard, setCurrentAttempt } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;

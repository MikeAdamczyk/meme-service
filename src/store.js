import { configureStore, createSlice } from "@reduxjs/toolkit";

import { memesList } from "./database/database.js";

const initialState = memesList;

const slice = createSlice({
  name: "memes",
  initialState,
  reducers: {
    upvote(state, action) {
      state.find((item) => item.id === action.payload).upvotes++;
    },
    downvote(state, action) {
      state.find((item) => item.id === action.payload).downvotes++;
    },
  },
});

export const store = configureStore({ reducer: { memes: slice.reducer } });

export const { upvote, downvote } = slice.actions;

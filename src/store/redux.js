import { configureStore, createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: [
    {
      id: "q1",
      author: "Max",
      text: "Fuck you Omar! 😁",
    },
    {
      id: "q2",
      author: "Yazeed",
      text: "Fuck you Omar! 💖",
    },
    {
      id: "q3",
      author: "Omar",
      text: "Fuck me!",
    },
  ],
  reducers: {},
});

export const quoteActions = quoteSlice.actions;

const store = configureStore({
  reducer: quoteSlice.reducer,
});

export default store;

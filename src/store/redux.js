import { configureStore, createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: [
    {
      id: "q1",
      author: "Max",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: "q2",
      author: "Yazeed",
      text: "Aspernatur esse cumque distinctio facere, earum labore pariatur quos non.",
    },
    {
      id: "q3",
      author: "Omar",
      text: "Necessitatibus ullam expedita esse saepe distinctio. Culpa ullam dicta aliquid distinctio neque.",
    },
  ],
  reducers: {
    addQuote(state, action) {
      const newItem = {
        id: `q${state.length + 1}`,
        ...action.payload,
      };
      state.push(newItem);
    },
  },
});

export const quoteActions = quoteSlice.actions;

const store = configureStore({
  reducer: quoteSlice.reducer,
});

export default store;

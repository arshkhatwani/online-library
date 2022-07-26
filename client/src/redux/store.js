import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/booksSlice";
import contriFormReducer from "./slices/contriFormSlice";

export const store = configureStore({
  reducer: {
    contriForm: contriFormReducer,
    books: booksReducer,
  },
});

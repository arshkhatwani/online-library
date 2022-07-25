import { configureStore } from "@reduxjs/toolkit";
import contriFormReducer from "./slices/contriFormSlice";

export const store = configureStore({
  reducer: {
    contriForm: contriFormReducer,
  },
});

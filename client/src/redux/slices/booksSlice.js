import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../constants/serverUrl";
import {
  fulfilledReducer,
  pendingReducer,
  rejectedReducer,
} from "../reducers/booksReducers";

const initialState = {
  isLoading: true,
  books: [],
};

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async ({ keyword }, thunkAPI) => {
    try {
      keyword = keyword || "";
      const res = await axios.get(serverUrl + `/books?keyword=${keyword}`);
      return res.data;
    } catch (e) {
      console.log(e);
      thunkAPI.rejectWithValue("Cannot get books");
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: {
    [getBooks.pending]: pendingReducer,
    [getBooks.rejected]: rejectedReducer,
    [getBooks.fulfilled]: fulfilledReducer,
  },
});

export default booksSlice.reducer;

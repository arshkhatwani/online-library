import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../constants/serverUrl";
import {
  fulfilledReducer,
  pendingReducer,
  rejectedReducer,
} from "../reducers/singleBookReducers";

const initialState = {
  isLoading: true,
  bookData: {},
};

export const getBookDetails = createAsyncThunk(
  "singleBook/getBookDetails",
  async ({ bookId }, thunkAPI) => {
    try {
      const res = await axios.get(serverUrl + `/books/${bookId}`);
      return res.data;
    } catch (e) {
      console.log(e);
      thunkAPI.rejectWithValue("Cannot get data");
    }
  }
);

const singleBookSlice = createSlice({
  name: "singleBook",
  initialState,
  extraReducers: {
    [getBookDetails.pending]: pendingReducer,
    [getBookDetails.fulfilled]: fulfilledReducer,
    [getBookDetails.rejected]: rejectedReducer,
  },
});

export default singleBookSlice.reducer;

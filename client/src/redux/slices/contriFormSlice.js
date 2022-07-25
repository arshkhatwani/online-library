import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fulfilledReducer,
  pendingReducer,
  rejectedReducer,
  setFormDataReducer,
} from "../reducers/contriFormReducers";
import axios from "axios";
import { serverUrl } from "../../constants/serverUrl";

export const submitForm = createAsyncThunk(
  "contriForm/submitForm",
  async ({ formBody }, thunkAPI) => {
    try {
      const res = await axios.post(serverUrl + "/books/upload", formBody);
      //   console.log(res);
      return res.data();
    } catch (e) {
      console.log(e);
      thunkAPI.rejectWithValue("Could not add book");
    }
  }
);

const initialState = {
  formData: {
    title: "",
    author: "",
    category: "",
    publication: "",
    publishYear: 0,
  },
};

const contriFormSlice = createSlice({
  name: "contriForm",
  initialState,
  reducers: {
    setFormData: setFormDataReducer,
  },
  extraReducers: {
    [submitForm.pending]: pendingReducer,
    [submitForm.fulfilled]: fulfilledReducer,
    [submitForm.rejected]: rejectedReducer,
  },
});

export default contriFormSlice.reducer;

export const { setFormData } = contriFormSlice.actions;

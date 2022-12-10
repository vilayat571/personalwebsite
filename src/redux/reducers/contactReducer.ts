import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IContact } from "../../pages/Contact";

interface IInitialState {
  data: any;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: IInitialState = {
  data: "",
  loading: false,
  error: null,
};

export const askQuestion = createAsyncThunk(
  "./postQuestion",
  async (form?: IContact) => {
    const url = "https://api.vilayatsafarov.com/api/v1/contact/";
    return axios
      .post(url, {
        name: form?.name,
        email: form?.email,
        subject: form?.subject,
        message: form?.message,
      })
      .then((data) => data);
  }
);

const contactReducer = createSlice({
  name: "contactReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(askQuestion.fulfilled, (state, action) => {
      state.data = "";
      state.loading = false;
      console.log("Payload", action.payload);
    });
  },
});

export default contactReducer.reducer;

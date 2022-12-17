import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    const token = localStorage.getItem("jwt");
    const url = "https://api.vilayatsafarov.com/api/v1/blog/questions/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: form?.title,
        subject: form?.subject,
      }),
    });
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
/* bearer token qeyd gotur */
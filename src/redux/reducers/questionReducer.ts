import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IQuestion } from "../../parts/Question/Questionform";

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
  async (form?: IQuestion) => {
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

const questionReducer = createSlice({
  name: "questionReducer",
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

export default questionReducer.reducer;
/* bearer token qeyd gotur */

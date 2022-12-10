import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  data: any;
  loading: boolean;
  error: null | undefined | string;
}

const initialState: IinitialState = {
  data: "",
  loading: false,
  error: null,
};

export const signIn = createAsyncThunk("/fetchToken", async (data?) => {
  const url = "";

  console.log("Sign in data", data);
});

const signinReducer = createSlice({
  name: "signinReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
  },
});

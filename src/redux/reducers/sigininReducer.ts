import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ISignin } from "../../pages/Signin";

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

export const signIn = createAsyncThunk("/fetchToken", async (data: ISignin) => {
  const url = "https://api.vilayatsafarov.com/api/v1/account/login/";
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  }).then((res) => res.json());
});

const signinReducer = createSlice({
  name: "signinReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      const access = action.payload.access;
      localStorage.setItem("jwt", access);
      localStorage.setItem("userDetails", JSON.stringify(action.payload));
    });
  },
});

export default signinReducer.reducer;

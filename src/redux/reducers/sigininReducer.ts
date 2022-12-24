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

  return await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials:'include',
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  }).then(res=>res.json());
});

const signinReducer = createSlice({
  name: "signinReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;

      localStorage.setItem("jwt", action.payload.access);
      localStorage.setItem("userDetails", JSON.stringify(action.payload.user_details));
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default signinReducer.reducer;

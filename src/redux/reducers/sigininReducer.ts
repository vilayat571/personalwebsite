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

  function Reers(res: any) {
    if (res.status === 200) {
      return res.json();
    } else {
      return res.status;
    }
  }

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  }).then((res) => Reers(res));
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
      const access = action.payload.access;
      localStorage.setItem("jwt", access);
      localStorage.setItem("userDetails", JSON.stringify(action.payload));
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default signinReducer.reducer;

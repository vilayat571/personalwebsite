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

  /* const resTer=(res:any)=>{
    res.json(),console.log(res.status)
  } */
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  }).then((res) => res.status)
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
      //const access = action.payload.access;
      //access !== undefined &&
    //  localStorage.setItem("jwt", access);
      //localStorage.setItem("userDetails", JSON.stringify(action.payload));
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      /*       console.log(action.err)
       */
    });
  },
});

export default signinReducer.reducer;

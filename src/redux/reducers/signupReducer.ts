import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const signUpUser = createAsyncThunk("/reducerUser", async (form) => {
  //const url = "";
  /*   fetch(url,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
body:JSON.stringify({

})
    }) */
  console.log(form);
});

const signupReducer = createSlice({
  name: "signupReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
  },
});

export default signupReducer.reducer;

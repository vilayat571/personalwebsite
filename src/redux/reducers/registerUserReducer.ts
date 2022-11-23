import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  data: any;
  error: null | undefined | string;
  loading: boolean;
}

const initialState: Partial<IInitialState> = {
  data: "",
  error: "",
  loading: false,
};

export const fetchUser = createAsyncThunk("/fetchUser", async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  return fetch(url).then((res) => res.json());
});

const registerUserReducer = createSlice({
  name: "registerUserReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload;
      console.log(action.payload);
    });
  },
});

export default registerUserReducer.reducer;

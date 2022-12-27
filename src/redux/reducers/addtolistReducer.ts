import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IAdd {
  data: any;
  loading: boolean;
  error: null | undefined | string;
}

const initialState: IAdd = {
  data: "",
  loading: false,
  error: null,
};

export const addToWisList = createAsyncThunk(
  "/addtoList",
  async (list: any) => {
    const url = "https://api.vilayatsafarov.com/api/v1/account/wish-list/";

    const token = localStorage.getItem("jwt");

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        wish_list: list,
      }),
    });
  }
);

const addtolistReducer = createSlice({
  name: "addtolistReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToWisList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
  },
});

export default addtolistReducer.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  categories: any;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: IInitialState = {
  categories: "",
  loading: false,
  error: null,
};

export const getCategories = createAsyncThunk("/fetchCategories", async () => {
  const url = "https://api.vilayatsafarov.com/api/v1/blog/categories/";
  const res = await fetch(url);
  const data = await res.json();
  return data;
});

const allcategoriesReducer = createSlice({
  name: "allcategoriesReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.categories=action.payload.results;

    });
  },
});

export default allcategoriesReducer.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  blogs: any;
  loading: boolean;
  error: null | undefined | string;
}

const initialState: IInitialState = {
  blogs: "",
  loading: false,
  error: null,
};

export const getBlogs = createAsyncThunk(
  "/fetchAllBlogs",
  async (id: number) => {
    if (id > 0) {
      const url2 = `https://api.vilayatsafarov.com/api/v1/blog/?&category=${
        id && id
      }`;
      const res = await fetch(url2);
      const data = await res.json();
      return data;
    } else {
      const url1 = "https://api.vilayatsafarov.com/api/v1/blog/";
      const res = await fetch(url1);
      const data = await res.json();
      return data;
    }
  }
);

const allBlogsReducer = createSlice({
  name: "allBlogsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.blogs = action.payload.results;
    });
  },
});

export default allBlogsReducer.reducer;

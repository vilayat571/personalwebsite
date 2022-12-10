import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  error: string | null | undefined;
  blogs: any;
  loading: boolean;
};

const initialState: IInitialState = {
  loading: false,
  blogs: [],
  error: null,
};

export const fetchBlogs = createAsyncThunk("/fetchBlogs", async () => {
  const url = "https://api.vilayatsafarov.com/api/v1/blog/";
  const res = await fetch(url);
  const data = await res.json();
  return data;
});

const blogsReducer = createSlice({
  name: "blogsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.blogs = action.payload;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = null;
    });
  },
});

export default blogsReducer.reducer;

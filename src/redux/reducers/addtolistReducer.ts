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

export const addToWisList = createAsyncThunk("/addtoList", async (list:Array<number>) => {
  const url = "https://api.vilayatsafarov.com/api/v1/account/wish-list/";


  console.log('list',list)

 /*  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        wish_list:[id]
    }),
  }); */
});

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

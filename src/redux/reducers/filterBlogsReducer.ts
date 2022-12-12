/* https://api.vilayatsafarov.com/api/v1/blog/?&category=4 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState{
    data:any;
    loading:boolean;
    error:null|undefined|string;
};

const initialState:IInitialState={
    data:"",
    loading:false,
    error:null
};

export const getCategory=createAsyncThunk('/getBlogsCategory',async()=>{
    
})

const filterBlogsReducer=createSlice({
name:"filterBlogsReducer",
initialState,
reducers:{},
extraReducers:(builder)=>{

}
})
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import allBlogsReducer from "./reducers/allBlogsReducer";
import allcategoriesReducer from "./reducers/allcategoriesReducer";
import blogsReducer from "./reducers/blogsReducer";
import questionReducer from "./reducers/questionReducer";
import sigininReducer from "./reducers/sigininReducer";
import signupReducer from "./reducers/signupReducer";

export const store = configureStore({
  reducer: {
    questionReducer: questionReducer,
    signinReducer: sigininReducer,
    blogsReducer: blogsReducer,
    allBlogsReducer: allBlogsReducer,
    allcategoriesReducer: allcategoriesReducer,
    signupReducer: signupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import allBlogsReducer from "./reducers/allBlogsReducer";
import allcategoriesReducer from "./reducers/allcategoriesReducer";
import blogsReducer from "./reducers/blogsReducer";
import contactReducer from "./reducers/contactReducer";
import sigininReducer from "./reducers/sigininReducer";
import signupReducer from "./reducers/signupReducer";

export const store = configureStore({
  reducer: {
    contactReducer: contactReducer,
    signinReducer: sigininReducer,
    blogsReducer:blogsReducer,
    allBlogsReducer:allBlogsReducer,
    allcategoriesReducer:allcategoriesReducer,
    signupReducer:signupReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import contactReducer from "./reducers/contactReducer";
import sigininReducer from "./reducers/sigininReducer";

export const store = configureStore({
  reducer: {
    contactReducer: contactReducer,
    signinReducer: sigininReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

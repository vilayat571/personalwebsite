import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import registerUserReducer from "./reducers/registerUserReducer";

export const store=configureStore({
    reducer:{
        registerUserReducer:registerUserReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
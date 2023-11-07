"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counterSlice";


const rootReducer = combineReducers({
    counter: counterReducer,
    //add all your reducers here
},);

export const store = configureStore({
    reducer: rootReducer,

});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
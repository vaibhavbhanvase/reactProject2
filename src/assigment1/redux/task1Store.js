import { configureStore } from "@reduxjs/toolkit";
import task1Reducer from "./task1Reducer";


export const task1Store = configureStore({
    reducer:{
        task1:task1Reducer
    }
})
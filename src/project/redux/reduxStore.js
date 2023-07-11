import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formReducer";



export const reduxStore = configureStore({
    reducer:{
        project:formReducer
    }
})
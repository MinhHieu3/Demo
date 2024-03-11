import {configureStore} from "@reduxjs/toolkit";
import testReducer from "./getSlice";


export const store=configureStore({
    reducer:{
       tests : testReducer
    }
})
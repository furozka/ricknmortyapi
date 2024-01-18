import { configureStore } from "@reduxjs/toolkit";
import  ricknmortyReducer  from "./characters/charactersSlice";
export const store = configureStore({
    reducer:{
        ricknmorty: ricknmortyReducer
    }
})
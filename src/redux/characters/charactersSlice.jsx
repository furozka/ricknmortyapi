import { createSlice } from "@reduxjs/toolkit";
import { getAsyncAllCharacters, getAsyncTargetCharacter, loadMoreAsyncCharacters } from "./charactersService";

const initialState = {
    characters: [],
    quotes: [],
    targetCharacter: {},
    isTrue: false,
    error: null,
    isLoading: false,
    status: "idle"
}
export const ricknmortySlice = createSlice({
    name: "ricknmorty",
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase(getAsyncAllCharacters.fulfilled, (state,action)=>{
            state.characters = action.payload.results
            state.isLoading = false
            state.status = "succeeded"
        })
        .addCase(getAsyncAllCharacters.pending, (state,action)=>{
            state.isLoading = true;
            state.status = "pending"
        })
        .addCase(getAsyncAllCharacters.rejected, (state,action)=>{
            state.isLoading = false;
            state.status = "failed"
            state.error = action.error.message
        })
        .addCase(loadMoreAsyncCharacters.fulfilled, (state,action)=>{
            action.payload.forEach((item)=>{
                state.characters.push(item)
            })
        })
        .addCase(loadMoreAsyncCharacters.rejected, (state,action)=>{
            state.error = action.error.message
            console.log(action.error.message)
        })
        .addCase(getAsyncTargetCharacter.fulfilled, (state,action)=>{
            state.targetCharacter = action.payload
        })
    }
}
)

export const selectCharacters = (state)=>state.ricknmorty.characters
export const selectTargetCharacter = (state)=>state.ricknmorty.targetCharacter
export default ricknmortySlice.reducer
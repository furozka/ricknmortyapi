import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAsyncAllCharacters = createAsyncThunk("characters/getAsyncAllCharacters", async ()=>{
    const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character`)
    return await res.json()
})

export const loadMoreAsyncCharacters = createAsyncThunk("characters/loadMoreAsyncCharacters", async (arr)=>{
    const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${arr}`)
    return await res.json()
})

export const getAsyncTargetCharacter = createAsyncThunk("characters/getAsyncTargetCharacter", async (id)=>{
    const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${id}`)
    return await res.json()
})
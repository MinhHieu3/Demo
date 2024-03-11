import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getTest = createAsyncThunk(
    'tests/getTest',
    async () => {
        const res = await axios.get(`https://restcountries.com/v3.1/all?fields=name,flags`)
        return res.data
    }
)
export  const searchTest=createAsyncThunk(
    'tests/searchTest',
    async (search)=>{
        const res=await axios.get(`https://restcountries.com/v3.1/name/`+search)
        return res.data
    }
)
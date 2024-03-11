import {createSlice} from "@reduxjs/toolkit";
import {getTest, searchTest} from "../service/getService";

const initialState = {
    tests: [],
    search:''
}
const testSlice = createSlice({
    name: 'tests',
    initialState,
    extraReducers: builder => {
        builder.addCase(getTest.fulfilled, (state, action) => {
            state.tests = action.payload
        })
        builder.addCase(searchTest.fulfilled, (state, action) => {
            state.search = action.payload
        })
    }
})
export default testSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDragon = createAsyncThunk('dragon/fetchDragon', async (_, thunkApi) => {
    const response = await fetch('https://api.spacexdata.com/v4/dragons');
    const data = await response.json();
    return data;

});

const initialState = {
    dragon: [],
};

const dragonSlice = createSlice({
    name: 'dragons',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchDragon.pending]: () => { },
        [fetchDragon.fulfilled]: (state, action) => {
            const newState = state;
            newState.dragon = action.payload;
        },
        [fetchDragon.rejected]: () => { },
    },
});

export default dragonSlice.reducer;

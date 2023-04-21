import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
  rockets: [],
};

export const fetchRockets = createAsyncThunk("rockets/fetchRockets", async (_, thunkApi) => {
  const response = await fetch("https://api.spacexdata.com/v4/rockets");
  const data = await response.json();
  let { rockets } = thunkApi.getState().rockets;
  rockets = data;
  return rockets;
});

const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {
    addRocket: (state, action) => {
      state.rockets.push(action.payload);
    },
  },
  extraReducers: {
    [fetchRockets.pending]: (store) => {
      const newRockets = store;
      newRockets.rockets = [];
      return newRockets;
    },
    [fetchRockets.fulfilled]: (state, action) => {
      const newRockets = state;
      newRockets.rockets = action.payload;
      return newRockets;
    },
    [fetchRockets.rejected]: (state, action) => {
      console.log('fetchRockets is rejected');
      console.log('action = ',action);
    },
  },
});


export default rocketsSlice.reducer;
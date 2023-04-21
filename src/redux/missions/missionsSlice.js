import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async (_, thunkApi) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions')
  const data = await response.json();
  return data;
});

const initialState = {
  missions: [],
};

const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    // addMission: (state, action) => {
    //   const newState = state;
    //   newState.missions.push(action.payload);
    // },
    // removeMission: (state, action) => {
    //   const newState = state;
    //   newState.missions = newState.missions.filter((mission) => mission.mission_name !== action.payload);
    // },
  },
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      const newState = state;
      newState.missions = [];
    },
    [fetchMissions.fulfilled]: (state, action) => {
      const newState = state;
      newState.missions = action.payload;
    },
    [fetchMissions.rejected]: () => {},
  },
});

// export const { addMission, removeMission } = missionsSlice.actions;

export default missionsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: [
    {
      name: "Elon Musk",
      missions: ['Thaicom'],
      rockets: [],
    },
  ],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addMission: (state, action) => {
      const newState = state;
      newState.missions.push(action.payload);
    },
    removeMission: (state, action) => {
      const newState = state;
      newState.missions = newState.missions.filter((mission) => mission.mission_name !== action.payload);
    },
  },
});

export const { addMission, removeMission } = profileSlice.actions;

export default profileSlice.reducer;
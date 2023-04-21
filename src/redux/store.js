import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from "./rockets/rocketsSlice";
import missionsReducer from "./missions/missionsSlice";
import profileReducer from "./profile/profileSlice";
import dragonReducer from "./dragon/dragonSlice";

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    profile: profileReducer,
    dragon: dragonReducer,
  },
});

export default store;
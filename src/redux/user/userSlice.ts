import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface SLiceState {
  currentUser: null | any;
}

const initialState: SLiceState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

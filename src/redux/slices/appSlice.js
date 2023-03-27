import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: "bright",
    userId: null
  },
  reducers: {
    changeTheme(state, { payload }) {
      state.theme = payload;
    },
    setUserId(state, { payload }) {
      state.userId = parseInt(payload) ?? null;
    }
  }
});

export default appSlice.reducer;
export const { changeTheme, setUserId } = appSlice.actions;

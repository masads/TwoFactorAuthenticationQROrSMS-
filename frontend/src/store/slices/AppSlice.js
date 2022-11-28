import { createSlice } from "@reduxjs/toolkit";
import appActions, { getToken, setToken, logOut } from "../actions/AppActions";

export const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    token: "",
    email: "",
    userId: "",
    name: "",
    mobileNumber: "",
    loading: true
  },
  reducers: appActions,
  extraReducers: {
    [getToken.pending]: (state, _) => {
      state.token = "";
    },
    [getToken.rejected]: (state, payload) => {
      state.token = "";
      state.loading = false;
    },
    [getToken.fulfilled]: (state, { payload }) => {
      console.log("Token from storage:", payload);
      state.token = payload.token;
      state.userId = payload.userId;
      state.name = payload.name;
      state.email = payload.email;
      state.mobileNumber = payload.mobileNumber;
      state.loading = false;
    },
    [setToken.pending]: (state, _) => {
      state.token = "";
    },
    [setToken.rejected]: (state, payload) => {
      state.token = "";
    },
    [setToken.fulfilled]: (state, { payload }) => {
      console.log("Token from storage:", payload);
      state.token = payload ? payload : "";
    },
    [logOut.pending]: (state, _) => {
      state.token = "";
    },
    [logOut.rejected]: (state, payload) => {
      state.token = "";
    },
    [logOut.fulfilled]: (state, { payload }) => {
      console.log(payload)
      state.token = "";
    },
  }
});

export default appSlice.reducer;

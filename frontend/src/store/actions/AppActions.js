import { createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import auth from '../../services/auth/Auth'
export const getToken = createAsyncThunk(
  "appSlice/getToken",
  async (data, { rejectWithValue }) => {
    try {
      const token = await SecureStore.getItemAsync("token");
      const userId = await SecureStore.getItemAsync("userId");
      if (!token && !userId) throw ""

      const result = await auth.getUserData(userId, token);
      if (!result.status) throw ""

      return { token, userId, name: result.data.name, email: result.data.email, mobileNumber: result.data.mobileNumber };

    } catch (error) {
      await SecureStore.deleteItemAsync("token");
      await SecureStore.deleteItemAsync("userId");
      return rejectWithValue("Something went wrong");
    }
  }
);

export const setToken = createAsyncThunk(
  "appSlice/setToken",
  async ({ token, secure = false, userId }, { rejectWithValue }) => {
    console.log(token, secure)
    if (secure) {
      await SecureStore.setItemAsync("token", token);
      await SecureStore.setItemAsync("userId", userId);
    }
    return token;
  }
);

export const logOut = createAsyncThunk(
  "appSlice/logOut",
  async (_, { rejectWithValue }) => {

    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("userId");
  }
);

function login(state, { payload: { name, mobileNumber, email, id } }) {
  state.email = email;
  state.mobileNumber = mobileNumber;
  state.userId = id;
  state.name = name;
}

const appActions = {
  login
};

export default appActions;

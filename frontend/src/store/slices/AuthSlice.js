import { createSlice } from "@reduxjs/toolkit"
import authActions from '../actions/AuthActions';

export const authSlice = createSlice({
    name: "authSlice",
    initialState: {
      alert:false,
      alertMessage:"Something went wrong!"
    },
    reducers: authActions
})
  
export default authSlice.reducer
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { API } from "../constant/API";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
  loggedIn: false,
};

export const CheckLogin = createAsyncThunk(
  "users/checkLogin",
  async () => {
    console.log("LOGIN");
    axios
      .get(`${API}/login/check_have_token`, {
        headers: {
          token: await AsyncStorage.getItem("token"),
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(false);
      });
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(CheckLogin.fulfilled, (state, action) => {
        // Add user to the state array
        state.loggedIn = action.payload;
      });
    },
  },
});

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import * as AuthApi from "./AuthSliceApi";
const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    isLoading: false,
    isLoging: false,
    isAdmin: false,
    Token: "",
  },
  extraReducers: (builder) => {
    //LOGIN USER
    builder.addCase(AuthApi.LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(AuthApi.LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoging = action.payload.success;
    });
    //REGISTER USER
    builder.addCase(AuthApi.RegisterUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(AuthApi.RegisterUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoging = action.payload.success;
    });
    //LOGIN ADMIN
    builder.addCase(AuthApi.LoginAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(AuthApi.LoginAdmin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAdmin = action.payload.success;
      state.Token = action.payload.Token;
    });
  },
});
//SELECTOR
export const Selector = {
  getIsLoading: (state) => state.Auth.isLoading,
  getIsLoging: (state) => state.Auth.isLoging,
  getIsAdmin: (state) => state.Auth.isAdmin,
  getToken: (state) => state.Auth.Token,
};
//
export default AuthSlice.reducer;

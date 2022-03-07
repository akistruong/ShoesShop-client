import { createSlice } from "@reduxjs/toolkit";
import * as AuthApi from "./AuthSliceApi";
const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    isLoading: false,
    isUser: false,
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
      state.isUser = action.payload.success;
      state.Token = action.payload.Token;
      if (action.payload.success) {
        localStorage.setItem("access__token", action.payload.Token);
      }
    });
    //REGISTER USER
    builder.addCase(AuthApi.RegisterUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(AuthApi.RegisterUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isUser = action.payload.success;
      if (action.payload.success) {
        localStorage.setItem("access__token", action.payload.Token);
      }
    });
    //LOGIN ADMIN
    builder.addCase(AuthApi.LoginAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(AuthApi.LoginAdmin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAdmin = action.payload.success;
      state.Token = action.payload.Token;
      if (action.payload.success) {
        localStorage.setItem("access__token", action.payload.Token);
      }
    });
    //Auth
    builder.addCase(AuthApi.Auth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(AuthApi.Auth.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAdmin = action.payload.isAdmin || false;
      state.isUser = action.payload.isUser || false;
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

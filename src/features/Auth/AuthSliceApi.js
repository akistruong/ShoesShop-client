import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthApi from "../../apis/Api__auth";
export const LoginUser = createAsyncThunk("LoginUser", async (body) => {
  try {
    const response = await AuthApi.LoginUser(body);
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const RegisterUser = createAsyncThunk("RegisterUser", async (body) => {
  try {
    const response = await AuthApi.RegisterUser(body);
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const LoginAdmin = createAsyncThunk("LoginAdmin", async (body) => {
  try {
    const response = await AuthApi.LoginAdmin(body);
    return response;
  } catch (error) {
    console.log(error);
  }
});

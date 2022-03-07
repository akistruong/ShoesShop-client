import React from "react";
import AuthSlice, { Selector } from "../features/Auth/AuthSlice";
import * as AuthApiPath from "../features/Auth/AuthSliceApi";
import { useDispatch, useSelector } from "react-redux";
const useAuth = () => {
  const dispatch = useDispatch();
  const Token = localStorage.getItem("access__token");
  const LoginUser = () => Token && dispatch(AuthApiPath.LoginUser());
  const LoginAdmin = () => {};
  const RegisterUser = () => {};
  const Auth = () => Token && dispatch(AuthApiPath.Auth());
  return { LoginUser, LoginAdmin, RegisterUser, Auth };
};

export default useAuth;

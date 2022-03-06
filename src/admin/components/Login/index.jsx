import React from "react";
import "./Login.css";
import { Selector } from "../../../features/Auth/AuthSlice";
import * as AuthApi from "../../../features/Auth/AuthSliceApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const Nav = useNavigate();
  const isAdmin = useSelector(Selector.getIsAdmin);
  const Token = useSelector(Selector.getToken);
  console.log(isAdmin);
  if (isAdmin) {
    Nav("/admin-dashbroad");
    localStorage.setItem("access__token", Token);
  }
  const SubmitLogin = () => {
    dispatch(
      AuthApi.LoginAdmin({
        email: "truongkiet.hn289@gmail.com",
        password: "123456",
      })
    );
  };
  return (
    <div className="AdminLogin__container">
      <div className="Admin__login">
        <div className="AdminLogin__formGroup">
          <label htmlFor="" className="Login__label">
            Email
          </label>
          <input
            type="text"
            placeholder="Email..."
            className="Login__Input"
            autoFocus
          />
        </div>
        <div className="AdminLogin__formGroup">
          <label htmlFor="" className="Login__label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password..."
            className="Login__Input"
          />
        </div>
        <div className="btn btnAdminLogin" onClick={SubmitLogin}>
          LOGIN
        </div>
      </div>
    </div>
  );
};

export default Login;

import axiosClient from "./Axios__client";

const AuthApi = {
  LoginUser: (body) => {
    const url = `auth/login`;
    return axiosClient.post(url, body);
  },
  RegisterUser: (body) => {
    const url = `auth/register`;
    return axiosClient.post(url, body);
  },
  LoginAdmin: (body) => {
    const url = `/auth/admin`;
    return axiosClient.post(url, body);
  },
  Auth: () => {
    const url = `/auth`;
    return axiosClient.post(url);
  },
};

export default AuthApi;

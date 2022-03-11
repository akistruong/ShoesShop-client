import axiosClient from "./Axios__client";

const UploadApi = {
  UploadImgsProduct: (body) => {
    const url = `upload/product-imgs`;
    return axiosClient.post(url, body);
  },
  DestroyImgsProduct: (body) => {
    const url = `destroy-img`;
    return axiosClient.post(url, body);
  },
};

export default UploadApi;

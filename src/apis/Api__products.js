import axiosClient from "./Axios__client";
const ProductApi = {
  getProducts: (params) => {
    const url = "products";
    return axiosClient.get(url, { params });
  },
};

export default ProductApi;

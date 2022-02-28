import axiosClient from "./Axios__client";
const ProductApi = {
  getProducts: (params) => {
    const url = "products";
    return axiosClient.get(url, { params });
  },
  getProductById: (id) => {
    const url = `products/${id}`;
    return axiosClient.get(url);
  },
};

export default ProductApi;

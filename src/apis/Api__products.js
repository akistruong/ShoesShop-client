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
  deleteProduct: (id) => {
    const url = `delete-product/${id}`;
    return axiosClient.delete(url);
  },
  updateProduct: (id, body) => {
    const url = `update-product/${id}`;
    return axiosClient.patch(url, body);
  },
  createProduct: (body) => {
    const url = `/create-product`;
    return axiosClient.post(url, body);
  },
};

export default ProductApi;

import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "../../apis/Api__products";

export const getAllProducts = createAsyncThunk(
  "getProductAll",
  async (params) => {
    const response = await ProductApi.getProducts(params);
    return response.data;
  }
);
export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (id) => {
    const response = await ProductApi.getProductById(id);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
  const response = await ProductApi.deleteProduct(id);
  return response.data;
});

export const Update = createAsyncThunk("updateProduct", async (id, payload) => {
  const response = await ProductApi.updateProduct(id, payload);
  return response.data;
});

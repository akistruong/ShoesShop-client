import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "../../apis/Api__products";

export const getAllProducts = createAsyncThunk(
  "getProductAll",
  async (params) => {
    try {
      const response = await ProductApi.getProducts(params);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const createProduct = createAsyncThunk(
  "createProduct",
  async (params) => {
    try {
      const response = await ProductApi.createProduct(params);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (id) => {
    const response = await ProductApi.getProductById(id);
    return response;
  }
);

export const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
  const response = await ProductApi.deleteProduct(id);
  return response;
});

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async (id, payload) => {
    const response = await ProductApi.updateProduct(id, payload);
    return response;
  }
);

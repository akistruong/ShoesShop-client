import { createSlice } from "@reduxjs/toolkit";
import * as PathApi from "./ProductSliceApi";
const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    products: [],
    product: {},
    loading: false,
  },
  extraReducers: (builder) => {
    //GET ALL PRODUCTS
    builder.addCase(PathApi.getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PathApi.getAllProducts.fulfilled, (state, action) => {
      state.loading = true;
      state.products = action.payload;
    });
    ////GET Single Product
    builder.addCase(PathApi.getSingleProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PathApi.getSingleProduct.fulfilled, (state, action) => {
      state.loading = true;
      state.products = action.payload;
    });
    ////DELETE  Product
    builder.addCase(PathApi.deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PathApi.deleteProduct.fulfilled, (state, action) => {
      state.loading = true;
      state.products = action.payload;
    });
  },
});

import { createSlice } from "@reduxjs/toolkit";
import * as PathApi from "./ProductSliceApi";
const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    products: [],
    product: {},
    loading: false,
    isSuccess: false,
    length: 0,
    deletedId: "",
    error: false,
  },
  reducers: {
    createProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const findIndex = state.products.findIndex(
        (item) => item._id == action.payload.id
      );
      state.products[findIndex] = action.payload.product;
    },
    DeleteImgs(state, action) {
      // state.products = state.products.filter(item=>item)
    },
  },
  extraReducers: (builder) => {
    //GET ALL PRODUCTS
    builder.addCase(PathApi.getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PathApi.getAllProducts.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.products = action.payload.products;
      state.length = action.payload.length;
    });
    ////GET Single Product
    builder.addCase(PathApi.getSingleProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PathApi.getSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload.product;
    });
    ////DELETE  Product
    builder.addCase(PathApi.deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PathApi.deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.deletedId = action.payload.id;
      state.products = state.products.filter(
        (item) => item._id != state.deletedId
      );
    });
    builder.addCase(PathApi.updateProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PathApi.updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      const findIndex = state.products.findIndex(
        (item) => item._id == action.payload.id
      );
      state.products[findIndex] = action.payload.product;
    });
    builder.addCase(PathApi.updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export const { createProduct, updateProduct } = ProductSlice.actions;
export default ProductSlice.reducer;

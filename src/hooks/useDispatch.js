import React from "react";
import usePathApi from "./usePatchApi";
import { useDispatch } from "react-redux";
import { createProduct, updateProduct } from "../features/Product/ProductSlice";
const useDispatchCustom = () => {
  const dispatch = useDispatch();
  const { UploadPath, ProductPath } = usePathApi();
  const UploadDispatch = {
    UploadImgsProduct: (body = {}) =>
      dispatch(UploadPath.UploadImgsProduct(body)),
    DestroyImgsProduct: (body = {}) =>
      dispatch(UploadPath.DestroyImgsProduct(body)),
  };
  const ProductDispatch = {
    getAllProducts: (params = {}) => {
      dispatch(ProductPath.getAllProducts(params));
    },
    getSingleProduct: (id = "") => {
      dispatch(ProductPath.getSingleProduct(id));
    },
    deleteProduct: (id = "") => {
      dispatch(ProductPath.deleteProduct(id));
    },
    updateProduct: (body = {}) => {
      dispatch(updateProduct(body));
    },
    createProduct: (body = {}) => {
      dispatch(createProduct(body));
    },
  };
  return { UploadDispatch, ProductDispatch };
};

export default useDispatchCustom;

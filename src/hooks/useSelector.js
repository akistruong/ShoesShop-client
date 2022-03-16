import React from "react";
import { useSelector } from "react-redux";

const useSelectorCustom = () => {
  let imgs = useSelector((state) => state.Upload.imgs);
  let isLoading = useSelector((state) => state.Upload.isLoading);
  let products = useSelector((state) => state.Product.products);
  let product = useSelector((state) => state.Product.product);
  let isSuccessProduct = useSelector((state) => state.Product.isSuccess);
  let productLength = useSelector((state) => state.Product.length);
  let productError = useSelector((state) => state.Product.error);
  const UploadSelector = {
    imgs,
    isLoading,
  };
  const ProductSelector = {
    products,
    product,
    isSuccessProduct,
    productLength,
    productError,
  };
  return {
    UploadSelector,
    ProductSelector,
  };
};

export default useSelectorCustom;

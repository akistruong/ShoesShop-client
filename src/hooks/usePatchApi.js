import React from "react";
import * as UploadApiPath from "../features/Upload/UploadSliceApi";
import * as ProductApiPath from "../features/Product/ProductSliceApi";
const usePathApi = () => {
  const UploadApi = {
    UploadImgsProduct: UploadApiPath.UploadImgsProduct,
    DestroyImgsProduct: UploadApiPath.DestroyImgsProduct,
  };
  const ProductApi = {
    getAllProducts: ProductApiPath.getAllProducts,
    getSingleProduct: ProductApiPath.getSingleProduct,
    deleteProduct: ProductApiPath.deleteProduct,
    updateProduct: ProductApiPath.updateProduct,
    createProduct: ProductApiPath.createProduct,
  };
  return { UploadPath: UploadApi, ProductPath: ProductApi };
};

export default usePathApi;

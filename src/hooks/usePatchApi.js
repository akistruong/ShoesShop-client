import React from "react";
import * as UploadApiPath from "../features/Upload/UploadSliceApi";
const usePathApi = () => {
  const UploadApi = {
    UploadImgsProduct: UploadApiPath.UploadImgsProduct,
    DestroyImgsProduct: UploadApiPath.DestroyImgsProduct,
  };
  return { UploadPath: UploadApi };
};

export default usePathApi;

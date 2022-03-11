import React from "react";
import usePathApi from "./usePatchApi";
import { useDispatch } from "react-redux";
const useDispatchCustom = () => {
  const dispatch = useDispatch();
  const { UploadPath } = usePathApi();
  const UploadDispatch = {
    UploadImgsProduct: (body = {}) =>
      dispatch(UploadPath.UploadImgsProduct(body)),
    DestroyImgsProduct: (body = {}) =>
      dispatch(UploadPath.DestroyImgsProduct(body)),
  };
  return { UploadDispatch };
};

export default useDispatchCustom;

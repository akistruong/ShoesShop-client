import React from "react";
import { useSelector } from "react-redux";

const useSelectorCustom = () => {
  let imgs = useSelector((state) => state.Upload.imgs);
  let isLoading = useSelector((state) => state.Upload.isLoading);
  const UploadSelector = {
    imgs,
    isLoading,
  };
  return {
    UploadSelector,
  };
};

export default useSelectorCustom;

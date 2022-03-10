import React from "react";
import { useSelector } from "react-redux";

const useSelectorCustom = () => {
  let imgs = useSelector((state) => state.Upload.imgs);
  let img = useSelector((state) => state.Upload.img);
  return {
    imgs,
    img,
  };
};

export default useSelectorCustom;

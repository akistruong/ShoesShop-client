import React from "react";
import "./UploadCustomElement.css";
import { UploadOutlined } from "@ant-design/icons";
import useSelectorCustom from "../../../../hooks/useSelector";
import usePathApi from "../../../../hooks/usePatchApi";
import { useDispatch } from "react-redux";
import UploadSlice, {
  UploadImg,
} from "../../../../features/Upload/UploadSlice";
import axios from "axios";
const UploadCustomElement = ({ setFieldValue }) => {
  const { img, imgs } = useSelectorCustom();
  const { DestroyImgsProduct, UploadImgsProduct } = usePathApi().UploadPath;
  const dispatch = useDispatch();
  const formData = new FormData();
  const handleChangeFile = async (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      dispatch(UploadImg(true));
      formData.append("imgs", files[i]);
      dispatch(UploadImg(false));
    }
    dispatch(UploadImgsProduct(formData));
    setFieldValue("imgs", imgs);
  };

  return (
    <div className="UploadCard">
      <div className="FileContainer">
        <input type="file" multiple onChange={handleChangeFile} />
        <div className="btn--ChooseFile"></div>
        <UploadOutlined className="icons icon--Upload" />
      </div>
    </div>
  );
};

export default UploadCustomElement;

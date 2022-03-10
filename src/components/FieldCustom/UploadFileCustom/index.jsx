import React from "react";
import { Upload, Button } from "antd";
import axios from "axios";
import "./UploadFile.css";
import useSelectorCustom from "../../../hooks/useSelector";
import UploadCustomElement from "./components/UploadCustomElement";
export const UploadCustom = ({ setFieldValue }) => {
  let formData = new FormData();
  return (
    <div className="UploadCustom">
      <UploadCustomElement setFieldValue={setFieldValue} />
    </div>
  );
};

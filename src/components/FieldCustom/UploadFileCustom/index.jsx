import React from "react";
import axios from "axios";
import "./UploadFile.css";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { BASE__API__URL } from "../../../const";
import useDispatchCustom from "../../../hooks/useDispatch";
import useSelectorCustom from "../../../hooks/useSelector";
export const UploadCustom = ({ setFieldValue }) => {
  const { imgs } = useSelectorCustom();
  const { DestroyImgsProduct, UploadImgsProduct } =
    useDispatchCustom().UploadDispatch;

  const props = {
    action: `${BASE__API__URL}upload/product-imgs`,
    onChange({ file, fileList }) {
      const fileArray = [];
      if (file.status !== "uploading") {
        for (let i = 0; i < fileList.length; i++) {
          fileArray.push(fileList[i]?.response.Files[0]);
        }
        setFieldValue("imgs", fileArray);
        console.log(file, fileList);
      }
    },
    onRemove({ response }) {
      const Files = response.Files;
      console.log(response);
      DestroyImgsProduct({ id: Files[0].public_id });
    },
  };
  return (
    <div className="UploadCustom">
      <Upload {...props} name="imgs" multiple on>
        <Button
          icon={<UploadOutlined className="icons" />}
          type="primary"
          size="large"
          style={{ display: "flex", alignItems: "center" }}
        >
          UPLOAD
        </Button>
      </Upload>
    </div>
  );
};

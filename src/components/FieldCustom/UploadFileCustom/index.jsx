import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import "./UploadFile.css";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { BASE__API__URL } from "../../../const";
import useDispatchCustom from "../../../hooks/useDispatch";
import useSelectorCustom from "../../../hooks/useSelector";
import { ListUpload } from "../../index";
import { UploadImgsProduct } from "../../../features/Upload/UploadSlice";
import { useDispatch } from "react-redux";
import Upload from "rc-upload";

const String2Obj = (str) => {
  return new Promise((resolve, reject) => {
    resolve(JSON.parse(str));
  });
};
const Obj2String = (Obj) => {
  return new Promise((resolve, reject) => {
    resolve(JSON.stringify(Obj));
  });
};
export const UploadCustom = ({ setFieldValue, value, isEdit }) => {
  const { imgs } = useSelectorCustom();
  const { DestroyImgsProduct } = useDispatchCustom().UploadDispatch;
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setFileList(value);
  }, [value]);
  console.log("Values", value);
  const props = {
    action: () => {
      return new Promise((resolve) => {
        resolve(`${BASE__API__URL}/upload/product-imgs`);
      });
    },
    multiple: true,
    async onStart(file) {
      console.log({ file });
      file.isLoading = true;
      file.status = "uploading";
      setFileList([...fileList, file]);
    },
    onSuccess(ret, file) {
      console.log("ONSUCEESFILELIST", fileList);
      const foundIndex = fileList.findIndex((item) => item.uid == file.uid);
      console.log(fileList[foundIndex]);
      fileList[foundIndex].isLoading = false;
      fileList[foundIndex].status = "done";
      fileList[foundIndex].public_id = ret.Files[0].public_id;
      fileList[foundIndex].url = ret.Files[0].url;
      setFieldValue("imgs", fileList);
      setFileList([...fileList]);
      dispatch(UploadImgsProduct([...fileList]));
    },
    onError(err) {
      console.log("onError", err);
    },
  };
  return (
    <div className="UploadCustom">
      <Upload {...props} name="imgs">
        {console.log("FILE RERENDER")},
        <Button
          icon={<UploadOutlined className="icons" />}
          type="primary"
          size="large"
          style={{ display: "flex", alignItems: "center" }}
        >
          UPLOAD
        </Button>
      </Upload>
      <ListUpload
        list={fileList}
        isEdit={isEdit}
        setFileList={setFileList}
        setFieldValue={setFieldValue}
      />
    </div>
  );
};

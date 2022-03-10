import React from "react";
import "./FileItem.css";
import { CloseCircleOutlined } from "@ant-design/icons";
import axios from "axios";
const FileItem = ({ item }) => {
  console.log(item);
  const handleDestroy = () => {
    axios.post("http://localhost:5000/api/destroy-img", {
      id: [
        "Shoes/product/o5qjahif4au9jn4hbmsl",
        "Shoes/product/xbhbubklbxe3a3f5nnyl",
        "Shoes/product/qm7eipdsljtdp44bzidi",
      ],
    });
  };
  return (
    <div className="FileItem">
      <img src={item.url} alt={item.public_id} />
      <CloseCircleOutlined
        className="icons icon--RemoveImg"
        onClick={handleDestroy}
      />
    </div>
  );
};

export default FileItem;

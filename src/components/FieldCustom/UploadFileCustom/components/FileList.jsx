import React from "react";
import FileItem from "./FileItem";
const FileList = ({ list }) => {
  console.log("File from filelist", list);
  return (
    <div>
      {list.map((img) => (
        <FileItem item={img} />
      ))}
    </div>
  );
};

export default FileList;

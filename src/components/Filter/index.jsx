import React from "react";
import "./Filter.css";
import { Checkbox } from "antd";
const Filter = ({ gender, size, colour }) => {
  return (
    <div className="Filter">
      <div className="Filter__gender">
        <Checkbox>Nam</Checkbox>
        <Checkbox>Nữ</Checkbox>
        <Checkbox>Unisex</Checkbox>
      </div>
      <div className="Filter__size"></div>
      <div className="Filter__colour"></div>
      <div className="Filter__brand"></div>
    </div>
  );
};

export default Filter;

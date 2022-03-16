import React from "react";
import { Radio } from "antd";
import "./RadioCustom.css";
const { Group } = Radio;
export const RadioFieldCustom = ({ value, setFieldValue, label, ...props }) => {
  const onChange = (e) => setFieldValue("sex", e.target.value);
  return (
    <>
      <label htmlFor="">{label}</label>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={"Nam"}>Nam</Radio>
        <Radio value={"Nữ"}>Nữ</Radio>
      </Radio.Group>
    </>
  );
};

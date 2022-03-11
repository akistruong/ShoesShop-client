import React from "react";
import "./CheckboxFieldCustom.css";
import { Checkbox, Space } from "antd";

export const CheckboxFieldCustom = ({
  sizes,
  colors,
  setFieldValue,
  ...props
}) => {
  const CheckboxGroup = Checkbox.Group;
  const handleChange = (e) => {
    if (sizes) {
      setFieldValue("sizes", e);
    } else {
      setFieldValue("colors", e);
    }
  };
  return (
    <CheckboxGroup
      onChange={handleChange}
      {...props}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {sizes
        ? sizes.map((item, index) => (
            <Checkbox key={index} value={item} className="checkboxStyle">
              {item}
            </Checkbox>
          ))
        : colors.map((item, index) => (
            <Checkbox
              key={index}
              value={item}
              className="checkboxStyle"
              style={{ backgroundColor: item.color.hex }}
            >
              {item.color.name}
            </Checkbox>
          ))}
    </CheckboxGroup>
  );
};

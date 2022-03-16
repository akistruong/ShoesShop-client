import React from "react";
import "./CheckboxFieldCustom.css";
import { Checkbox, Space } from "antd";
import { ErrorMessage } from "formik";
export const CheckboxFieldCustom = ({
  sizes,
  colors,
  inputname,
  setFieldValue,
  value,
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
    <>
      <CheckboxGroup
        onChange={handleChange}
        {...props}
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        value={value}
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
                value={item.name}
                className="checkboxStyle"
                style={{ backgroundColor: item.hex }}
              >
                {item.name}
              </Checkbox>
            ))}
      </CheckboxGroup>
      <ErrorMessage component="div" name={inputname} className="error" />
    </>
  );
};

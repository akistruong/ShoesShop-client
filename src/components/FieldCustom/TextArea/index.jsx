import React from "react";
import { Field, ErrorMessage } from "formik";
export const TextArea = ({
  isDisabled = false,
  value,
  label,
  name,
  ...props
}) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <Field
        as="textarea"
        name={name}
        {...props}
        value={value}
        disabled={isDisabled}
      />
      <ErrorMessage component="div" name={name} className="error" />
    </div>
  );
};

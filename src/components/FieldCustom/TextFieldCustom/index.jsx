import React from "react";
import { ErrorMessage, useField } from "formik";
import "./TextFieldCustom.css";
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="TextField">
      <label htmlFor={field.name} className="TextField__label">
        {label}
      </label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

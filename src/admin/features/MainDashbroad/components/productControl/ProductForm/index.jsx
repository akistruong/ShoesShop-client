import React from "react";
import { Form, Formik, Field } from "formik";
import { UploadCustom } from "../../../../../../components/FieldCustom";
import * as Components from "../../../../../../components";
import { Space } from "antd";
import "./ProductForm.css";
import * as Yup from "yup";
const ColorsOptions = [
  {
    color: {
      name: "Black",
      hex: "#000000",
    },
  },
  {
    color: {
      name: "Brown",
      hex: "#964B00",
    },
  },
  {
    color: {
      name: "Green",
      hex: "#00FF00",
    },
  },
  {
    color: {
      name: "Organe",
      hex: "#CC5500",
    },
  },
  {
    color: {
      name: "Blue",
      hex: "#0096FF",
    },
  },
];
const ProductForm = ({ values = {} }) => {
  const { TextField, UploadCustom, CheckboxFieldCustom } = Components;
  const validate = Yup.object({
    name: Yup.string().required("Phải nhập trường này"),
    category: Yup.string().required("Phải nhập trường này"),
    price: Yup.number("Trường này phải là số").required("Phải nhập trường này"),
    sizes: Yup.array().required(),
    colors: Yup.array().required(),
    dsc: Yup.string().required(),
    stars: Yup.string().required(),
    sex: Yup.string().required(),
    imgs: Yup.string().required(),
    collections: Yup.string().required(),
  });
  return (
    <Formik
      initialValues={{
        name: values.name || "",
        category: values.category || "",
        price: values.price,
        sizes: values.sizes || [],
        colors: values.colors || [],
        // dsc: values.dsc || "",
        // stars: values.start || "",
        // sex: values.sex || "",
        imgs: values.imgs || [],
        // collections: values.collections || "",
      }}
      validationSchema={validate}
      onSubmit={(values) => console.log(values)}
      validateOnBlur
    >
      {({ values, setFieldValue }) => (
        console.log(values),
        (
          <Form className="FormProduct">
            <br></br>
            <TextField label="Tên sản phẩm" name="name" />
            <br></br>
            <TextField label="Tên danh mục" name="category" />
            <br></br>
            <TextField label="Giá" name="price" type="number" />
            <br></br>
            <UploadCustom setFieldValue={setFieldValue} />
            <br></br>
            <CheckboxFieldCustom
              setFieldValue={setFieldValue}
              sizes={[35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]}
            />
            <br></br>
            <CheckboxFieldCustom
              setFieldValue={setFieldValue}
              colors={ColorsOptions}
            />
            <br></br>
            <button className="btn" type="submit">
              SUBMIT
            </button>
          </Form>
        )
      )}
    </Formik>
  );
};

export default ProductForm;

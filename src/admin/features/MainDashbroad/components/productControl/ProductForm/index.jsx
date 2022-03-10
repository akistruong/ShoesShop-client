import React from "react";
import { Form, Formik, Field } from "formik";
import { UploadCustom } from "../../../../../../components/FieldCustom";
import "./ProductForm.css";
import FileList from "../../../../../../components/FieldCustom/UploadFileCustom/components/FileList";
import * as Yup from "yup";
const ProductForm = ({ values = {} }) => {
  const validate = Yup.object({
    name: Yup.string().required("Phải nhập trường này"),
    category: Yup.string().required(),
    price: Yup.number("Phải là số").required(),
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
        // name: values.name || "",
        // category: values.category || "",
        // price: values.price,
        // sizes: values.sizes || [],
        // colors: values.colors || [],
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
            <UploadCustom setFieldValue={setFieldValue} />
            <FileList list={values.imgs} />
          </Form>
        )
      )}
    </Formik>
  );
};

export default ProductForm;

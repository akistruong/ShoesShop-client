import React, { useEffect, useState, useLayoutEffect } from "react";
import { Form, Formik, Field } from "formik";
import * as Components from "../../../../../../components";
import { Modal, Spin, Button } from "antd";
import "./ProductForm.css";
import * as Yup from "yup";
import useDispatchCustom from "../../../../../../hooks/useDispatch";
import useSelectorCustom from "../../../../../../hooks/useSelector";
import { useParams, useNavigate } from "react-router-dom";
import ProductApi from "../../../../../../apis/Api__products";
import { updateProduct } from "../../../../../../features/Product/ProductSliceApi";
///TEST
import { useDispatch } from "react-redux";
const ColorsOptions = [
  {
    name: "Black",
    hex: "#000000",
  },
  {
    name: "Brown",
    hex: "#964B00",
  },
  {
    name: "Green",
    hex: "#00FF00",
  },
  {
    name: "Organe",
    hex: "#CC5500",
  },
  {
    name: "Blue",
    hex: "#0096FF",
  },
];
const ProductForm = ({ msg, isEditForm }) => {
  // window.onbeforeunload = function (e) {
  //   e.preventDefault();
  //   e.returnValue = "sadasdds";
  // };
  const [loading, setLoading] = useState(false);
  const [stateProductError, setProductError] = useState(null);
  const { product, products, isSuccessProduct, productError } =
    useSelectorCustom().ProductSelector;
  const { imgs } = useSelectorCustom().UploadSelector;
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [Values, setValues] = useState({
    name: "",
    category: "",
    price: 0,
    sizes: [],
    colors: [],
    sex: "",

    dsc: "",
    imgs: imgs || [],
    collections: {
      _id: "",
      name: "",
      dsc: "",
    },
  });
  useEffect(() => {
    setProductError(productError);
  }, [productError]);
  const { id } = useParams();
  const {
    TextField,
    UploadCustom,
    CheckboxFieldCustom,
    TextArea,
    RadioFieldCustom,
  } = Components;
  const { createProduct, getSingleProduct, updateProduct, getAllProducts } =
    useDispatchCustom().ProductDispatch;

  useEffect(async () => {
    if (isEditForm) {
      try {
        const respnse = await ProductApi.getProductById(id);
        setValues(respnse.product);
      } catch (error) {
        throw error;
      }
    }
  }, []);
  const validate = Yup.object({
    name: Yup.string().required("Ph???i nh???p tr?????ng n??y"),
    category: Yup.string().required("Ph???i nh???p tr?????ng n??y"),
    price: Yup.number("Tr?????ng n??y ph???i l?? s???").required("Ph???i nh???p tr?????ng n??y"),
    sizes: Yup.array().required(),
    colors: Yup.array().required(),
    dsc: Yup.string()
      .required("Tr?????ng n??y kh??ng ???????c tr???ng")
      .min(30, "T???i thi???u 30 k?? t???"),
    sex: Yup.string().required(),
    imgs: Yup.array().required(),
    collections: Yup.object().required(),
  });
  return (
    <Formik
      initialValues={Values}
      validationSchema={validate}
      enableReinitialize
      onSubmit={async (values, actions) => {
        console.log(actions);
        if (isEditForm) {
          console.log({ values });
          try {
            setLoading(true);
            const response = await ProductApi.updateProduct(id, values);
            setLoading(false);
            if (response) {
              updateProduct(response);
              Modal.success({
                content: "C???p nh???p Th??nh C??ng",
              });
              navigate("../products-control");
            }
          } catch (error) {
            Modal.error({
              title: "C???p nh???p th???t b???i",
              content: error.message,
            });
          }
        } else {
          try {
            setLoading(true);
            const response = await ProductApi.createProduct(values);
            setLoading(false);
            if (response) {
              createProduct(values);
              Modal.success({
                content: "some messages...some messages...",
              });
              actions.resetForm();
            }
          } catch (error) {
            Modal.error({
              content: "some mErressages...some messages...",
            });
          }
        }
      }}
      validateOnBlur
    >
      {({ values, setFieldValue }) => (
        <Form className="FormProduct">
          <br />
          <TextField label="T??n s???n ph???m" name="name" value={values.name} />
          <br />
          <TextField
            label="T??n danh m???c"
            name="category"
            value={values.category}
          />
          <br />
          <TextField
            label="Gi??"
            name="price"
            type="number"
            value={values.price}
          />
          <br />
          <RadioFieldCustom
            setFieldValue={setFieldValue}
            label="Gi???i t??nh"
            value={values.sex}
          />
          <br />
          <UploadCustom
            setFieldValue={setFieldValue}
            value={values.imgs}
            isEdit={isEditForm}
          />
          <br />
          <CheckboxFieldCustom
            setFieldValue={setFieldValue}
            sizes={[35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]}
            inputname="sizes"
            value={values.sizes}
          />
          <br />
          <CheckboxFieldCustom
            setFieldValue={setFieldValue}
            colors={ColorsOptions}
            inputname="colors"
            value={values.colors}
          />
          <br />
          <TextArea
            name="dsc"
            style={{ width: "100%" }}
            label="M?? t??? s???n ph???m"
            value={values.dsc}
          />
          <br />
          <TextField
            label="T??n Collection"
            name={"collections.name"}
            value={values.collections.name}
            isDisabled={isEditForm && true}
          />
          <br />
          <TextArea
            name={"collections.dsc"}
            style={{ width: "100%" }}
            label="M?? t??? v??? collections"
            value={values.collections.dsc}
            isDisabled={isEditForm && true}
          />
          <br />
          <button className="btn">SUBMIT {loading && <Spin />}</button>
          <br />
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;

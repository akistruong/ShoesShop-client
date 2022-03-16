import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import ControlBar from "../components/controlBar";
import ProductForm from "../components/productControl/ProductForm";
import ProductManager from "../components/productControl/ProductManager";
import Main from "../components/Main";
import { Link, Route, Routes } from "react-router-dom";
import "./index.css";
const MainDashbroad = () => {
  // const { Auth } = useAuth();
  // useEffect(() => {
  //   Auth();
  // }, []);
  const [show, setShow] = useState(false);
  return (
    <div className="MainDashbroad">
      <ControlBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="create-product" element={<ProductForm />} />
        <Route path="products-control/" element={<ProductManager />} />
        <Route path="products-control/delete/:id" element={<ProductForm />} />
        <Route
          path="products-control/edit/:id"
          element={<ProductForm isEditForm={true} />}
        />
      </Routes>
    </div>
  );
};

export default MainDashbroad;

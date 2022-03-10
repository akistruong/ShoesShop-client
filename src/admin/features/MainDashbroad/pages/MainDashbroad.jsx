import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import ControlBar from "../components/controlBar";
import ProductForm from "../components/productControl/ProductForm";
const MainDashbroad = () => {
  // const { Auth } = useAuth();
  // useEffect(() => {
  //   Auth();
  // }, []);
  const [show, setShow] = useState(false);
  return (
    <div className="MainDashbroad">
      <ProductForm />
    </div>
  );
};

export default MainDashbroad;

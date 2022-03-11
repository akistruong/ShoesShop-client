import React, { useState } from "react";
import "./Filter.css";
import FilterGender from "./components/Filter__gender";
import FilterColor from "./components/Filter__color";
import FilterSize from "./components/Filter__size";
import FilterBrand from "./components/Filter__brand";
import { useDispatch } from "react-redux";
import * as ProductApi from "../../features/Product/ProductSliceApi";
import { Spin, Space } from "antd";
export const Filter = () => {
  console.log("REREDNER FILTER");
  const dispatch = useDispatch();
  const [gender, setGender] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colours, setColours] = useState([]);
  const [brands, setBrands] = useState([]);
  const submitFilter = () => {
    dispatch(
      ProductApi.getAllProducts({ sex: gender, sizes: sizes, colours: colours })
    );
  };
  return (
    <div className="Filter">
      <Space direction="vertical">
        <div className="Filter__gender">
          <h4>GENDER</h4>
          <FilterGender gender={gender} setGender={setGender} />
        </div>
        <div className="Filter__size">
          <h4>SIZE</h4>
          <FilterSize sizes={sizes} setSizes={setSizes} />
        </div>
        <div className="Filter__colour">
          <h4>Colour</h4>
          <FilterColor colours={colours} setColours={setColours} />
        </div>
        <div className="Filter__brand">
          <h4>Brand</h4>
          <FilterBrand />
        </div>
      </Space>
      <div className="Btn__submit" onClick={submitFilter}>
        FILTER
        <Spin className="Spin Spin__submit" />
      </div>
    </div>
  );
};

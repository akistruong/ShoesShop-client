import React from "react";
import "./Filter.css";
import FilterGender from "./components/Filter__gender";
import FilterColor from "./components/Filter__color";
import FilterSize from "./components/Filter__size";
import FilterBrand from "./components/Filter__brand";
const Filter = ({ gender, size, colour }) => {
  return (
    <div className="Filter">
      <div className="Filter__gender">
        <h4>GENDER</h4>
        <FilterGender />
      </div>
      <div className="Filter__size">
        <h4>SIZE</h4>
        <FilterSize />
      </div>
      <div className="Filter__colour">
        <h4>Colour</h4>
        <FilterColor />
      </div>
      <div className="Filter__brand">
        <h4>Brand</h4>
        <FilterBrand />
      </div>
    </div>
  );
};

export default Filter;

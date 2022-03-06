import React from "react";
import { Checkbox, Col, Row } from "antd";
import { useDispatch } from "react-redux";
import * as ProductApi from "../../../../features/Product/ProductSliceApi";
import queryString from "query-string";
const FilterGender = ({ gender, setGender }) => {
  const plainOptions = ["Nam", "Nữ", "Unisex"];
  const dispatch = useDispatch();
  const onChange = (e) => {
    setGender(e);
  };
  return (
    <>
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <Row>
          {plainOptions.map((gender) => (
            <Col span={24}>
              <Checkbox value={gender} className="checkboxStyle">
                {gender}
              </Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </>
  );
};

export default FilterGender;

import React from "react";
import { Checkbox, Col, Row } from "antd";
const FilterGender = ({ gender }) => {
  const plainOptions = ["Nam", "Nữ", "Unisex"];
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <Row>
          <Col span={6}>
            <Checkbox value="Nam">Nam</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="Nữ">Nữ</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="Unisex">Unisex</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </>
  );
};

export default FilterGender;

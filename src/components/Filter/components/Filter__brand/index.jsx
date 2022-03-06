import React, { useEffect } from "react";
import { Checkbox, Row, Col } from "antd";
const FilterBrand = () => {
  useEffect(() => {});

  const plainOptions = [
    "RED",
    "Blue",
    "Black",
    "RED1",
    "Blue1",
    "Black1",
    "RED2",
    "Blue2",
    "Black2",
  ];
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <Row>
          <Col span={6}>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="E">E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </>
  );
};

export default FilterBrand;

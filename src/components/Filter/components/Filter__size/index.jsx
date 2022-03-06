import React from "react";
import { Checkbox, Col, Row } from "antd";
import { useDispatch } from "react-redux";
import * as ProductApi from "../../../../features/Product/ProductSliceApi";
const FilterSize = ({ sizes, setSizes }) => {
  const dispatch = useDispatch();
  const plainOptions = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
  const onChange = (e) => {
    setSizes(e);
  };
  return (
    <>
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <Row>
          {plainOptions.map((size) => (
            <Col span={6}>
              <Checkbox
                value={size}
                className="checkboxStyle"
                style={{ width: "auto" }}
              >
                {size}
              </Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </>
  );
};

export default FilterSize;

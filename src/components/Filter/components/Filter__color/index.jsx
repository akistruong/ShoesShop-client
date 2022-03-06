import React from "react";
import "./index.css";
import { Checkbox, Row, Col } from "antd";
const FilterColor = ({ colours, setColours }) => {
  const plainOptions = [
    {
      color: {
        name: "Black",
        hex: "#000000",
      },
    },
    {
      color: {
        name: "Brown",
        hex: "#964B00",
      },
    },
    {
      color: {
        name: "Green",
        hex: "#00FF00",
      },
    },
    {
      color: {
        name: "Organe",
        hex: "#CC5500",
      },
    },
    {
      color: {
        name: "Blue",
        hex: "#0096FF",
      },
    },
  ];
  const onChange = (e) => {
    setColours(e);
  };
  return (
    <>
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <Row>
          {plainOptions.map((options, index) => (
            <Col span={8} key={index}>
              <Checkbox
                value={options.color.name}
                className="checkboxStyle"
                style={{ backgroundColor: options.color.hex, color: "#333" }}
              >
                {options.color.name}
              </Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </>
  );
};

export default FilterColor;

import React from "react";
import "./ProductList.css";
import ProductCard from "../../../components/ProductCard";
import { Row, Col } from "antd";
const ProductList = ({ list = [1, 2, 3, 4, 5, 6] }) => {
  return (
    <Row gutter={[16, 16]}>
      {list.map((item, index) => (
        <Col md={12} lg={8}>
          <ProductCard data={item} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;

import React, { useEffect, useLayoutEffect } from "react";
import "./ProductManager.css";
import { Table, Pagination, Space, Button } from "antd";
import { Link, Routes, Route } from "react-router-dom";
import useDispatchCustom from "../../../../../../hooks/useDispatch";
import useSelectorCustom from "../../../../../../hooks/useSelector";
import ConfirmModal from "../../ConfirmModal";

const ProductManager = () => {
  const { getAllProducts, getSingleProduct, deleteProduct } =
    useDispatchCustom().ProductDispatch;
  const columns = [
    {
      title: "_id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Size",
      dataIndex: "sizes",
      render: (sizes) => `${sizes.toString()}`,
    },
    {
      title: "Color",
      dataIndex: "colors",
      render: (colors) =>
        `${colors.toString() || "Sản phẩm chưa cập nhập colors"}`,
    },
    {
      title: "Mô tả",
      dataIndex: "dsc",
      key: "dsc",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Giới tính",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "Actions",
      render: (text, record) => {
        console.log(record);
        return (
          <Space>
            <ConfirmModal _id={record._id} key={record._id} />
            <Button>
              <Link to={`edit/${record._id}`}>Edit</Link>
            </Button>
          </Space>
        );
      },
    },
    {
      title: "Hình ảnh",
      dataIndex: "imgs",
      render: (imgs) => {
        return imgs.map((img, index) => {
          return (
            <>
              <br />
              <a
                target="_blank"
                href={img?.url || ""}
                key={`imgs-${index}`}
                className="Link"
              >
                {img?.url || ""}
              </a>
            </>
          );
        });
      },
    },
  ];
  const { products, productLength } = useSelectorCustom().ProductSelector;
  useEffect(() => {
    getAllProducts();
  }, []);
  useEffect(() => {
    console.log("ProdutsChange");
  }, [products]);
  return (
    <>
      <div className="ProductManager">
        <Table
          dataSource={products}
          columns={columns}
          pagination={false}
          scroll={{ x: true }}
        />
        <Pagination
          onChange={(pageNumber) => getAllProducts({ page: pageNumber })}
          style={{ padding: "20px" }}
          pageSize={10}
          total={productLength}
        />
      </div>
    </>
  );
};

export default ProductManager;

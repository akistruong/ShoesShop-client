import React, { useState } from "react";
import "./ControlBar.css";
import { Drawer, Button, Menu, Dropdown } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
const ControlBar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <div className="ControllerBar">
      <div className="Controller__menu--large__device">
        <Menu
          style={{ width: "100%" }}
          mode="inline"
          theme="dark"
          className="ControlBar__menu"
        >
          <SubMenu
            key="product"
            title="Sản Phẩm"
            className="ControlBarMenu__Submenu"
          >
            <Menu.ItemGroup key="g1">
              <Menu.Item key="1">Thêm sản phẩm</Menu.Item>
              <Menu.Item key="2">Chỉnh sửa thông tin sản phẩm</Menu.Item>
              <Menu.Item key="3">Xóa sản phẩm</Menu.Item>
              <Menu.Item key="4"></Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
};

export default ControlBar;

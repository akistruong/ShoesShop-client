import React, { useState } from "react";
import "./ControlBar.css";
import { Drawer, Button, Menu, Dropdown } from "antd";
import {
  UserOutlined,
  DatabaseOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
const ControlBar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="ControllerBar">
      <div className="Controller__menu--large__device">
        <Menu
          style={{ width: "100%" }}
          mode="inline"
          theme="dark"
          className="ControlBar__menu"
          defaultOpenKeys={["quick-menu"]}
        >
          <SubMenu key="quick-menu" title="Quick Menu">
            <Menu.Item key="users" icon={<UserOutlined />}>
              Users
            </Menu.Item>
            <Menu.Item key="products" icon={<DatabaseOutlined />}>
              <Link to="products-control">Products</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DollarCircleOutlined />}>
              Option 4
            </Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div className="Controller__menu--small__device">
        <Button onClick={showDrawer}>MENU</Button>
        <Drawer onClose={onClose} visible={visible}>
          <Menu style={{ width: "100%" }} mode="inline" theme="dark">
            <SubMenu key="product" title="Sản Phẩm">
              <Menu.ItemGroup key="g1">
                <Menu.Item key="0">
                  <Link to={"products-control"}>Quản lý sản phẩm</Link>
                </Menu.Item>
                <Menu.Item key="1">
                  {" "}
                  <Link to={"create-product"}>Thêm</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Drawer>
      </div>
    </div>
  );
};

export default ControlBar;

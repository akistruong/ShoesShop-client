import React from "react";
import { Row, Col, Layout, List, Menu, Dropdown } from "antd";
import "./header.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Drawer from "./components/Drawer/Drawer";
const { SubMenu } = Menu;
const menu = (
  <div className="Menu__Overlay">
    <ul className="Menu__item">
      Featured
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <ul className="Menu__item">
      Featured
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <ul className="Menu__item">
      Featured
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
);
const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">LOGO</div>
      <div className="Header__menu--large__device">
        <Dropdown overlay={menu}>
          <a href="#">Click Me</a>
        </Dropdown>
        <Dropdown overlay={menu}>
          <a href="#">Click Me</a>
        </Dropdown>
        <Dropdown overlay={menu}>
          <a href="#">Click Me</a>
        </Dropdown>
      </div>
      <div className="Header__menu--small__device">
        <ShoppingCartOutlined className="icons icon__Cart" />
        <Drawer />
      </div>
    </div>
  );
};

export default Header;

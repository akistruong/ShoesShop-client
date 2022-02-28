import React from "react";
import { Menu, Dropdown } from "antd";
import "./header.css";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
//Components
import Search from "./components/Search/Search";
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
  console.log("HEADER RERENDER");
  return (
    <div className="Header">
      <section>
        <div className="Header__logo LOGO">
          THESHOES <span className="LOGO__STYLE">@kiettruong</span>
        </div>
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
        {/* Common Large device and small device */}
        <div className="Header__actions">
          <Search />
          <ShoppingCartOutlined className="icons icon__Cart" />
          <Drawer />
        </div>
      </section>
    </div>
  );
};

export default Header;

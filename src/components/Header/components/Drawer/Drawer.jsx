import React, { useState } from "react";
import { Drawer, Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const MenuData = [
  {
    type: "Nam",
    featureds: ["1", "2", "3"],
    brands: ["1", "2", "3"],
    sales: ["1", "2", "3"],
  },
  {
    type: "Nữ",
    featureds: ["1", "2", "3"],
    brands: ["1", "2", "3"],
    sales: ["1", "2", "3"],
  },
];

const DrawerMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="Drawer">
      <MenuOutlined
        onClick={showDrawer}
        className="icons icon__Menu"
        style={{ display: "block" }}
      />
      <Drawer
        placement="right"
        onClose={onClose}
        visible={visible}
        width={"50%"}
        closable={false}
      >
        <Menu mode="inline">
          {MenuData.map((menu, index) => {
            return (
              <Menu.SubMenu title={menu.type} key={index}>
                <Menu.SubMenu title="Featured" key={`${index}-Featured`}>
                  {menu.featureds.map((feature) => (
                    <Menu.Item>{feature}</Menu.Item>
                  ))}
                </Menu.SubMenu>

                <Menu.SubMenu title="Brand" key={`${index}-Brand`}>
                  {menu.brands.map((brand) => (
                    <Menu.Item>{brand}</Menu.Item>
                  ))}
                </Menu.SubMenu>

                <Menu.SubMenu title="Sale" key={`${index}-Sale`}>
                  {menu.sales.map((sales) => (
                    <Menu.Item>{sales}</Menu.Item>
                  ))}
                </Menu.SubMenu>
              </Menu.SubMenu>
            );
          })}
        </Menu>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;

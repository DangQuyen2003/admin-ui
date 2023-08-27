import {
  AppstoreAddOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  return (
    <div className="menu-page">
      <Menu
        className="menu-page-vertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreAddOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            icon: <ShopOutlined />,
            key: "/inventory",
          },
          {
            label: "Orders",
            icon: <ShoppingCartOutlined />,
            key: "/orders",
          },
          {
            label: "Customers",
            icon: <UserOutlined />,
            key: "/customers",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default MenuPage;

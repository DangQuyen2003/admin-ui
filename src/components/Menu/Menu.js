import { AppstoreAddOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {

  const navigate = useNavigate()

  return (
    <div className="menu-page">
      <Menu
        onClick={(item) => {
          navigate(item.key)
        }}
        items={[
          {
            label: "Dashboard",
            icon:<AppstoreAddOutlined/>,
            key: "/",
          },
          {
            label: "Inventory",
            icon:<ShopOutlined/>,
            key: "/inventory",
          },
          {
            label: "Orders",
            icon:<ShoppingCartOutlined/>,
            key: "/orders",
          },
          {
            label: "Customers",
            icon:<UserOutlined/>,
            key: "/customers",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default MenuPage;

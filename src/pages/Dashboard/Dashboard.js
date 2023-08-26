import { Space, Typography } from "antd";
import DashboardCard from "./DashboardCard/DashboardCard";
import {
  DollarCircleFilled,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import RecentOrders from "./RecentOrders/RecentOrders";
import VerticalBar from "./DashboardVerticalBar/VerticalBar";

function Dashboard() {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={3}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 50,
                fontSize: 17,
                padding: 9,
              }}
            />
          }
          title={"Orders"}
          value={123}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 50,
                fontSize: 17,
                padding: 9,
              }}
            />
          }
          title={"Inventory"}
          value={123}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 50,
                fontSize: 17,
                padding: 9,
              }}
            />
          }
          title={"Customers"}
          value={123}
        />
        <DashboardCard
          icon={
            <DollarCircleFilled
              style={{
                color: "gold",
                backgroundColor: "rgba(255,255,0,0.35)",
                borderRadius: 50,
                fontSize: 17,
                padding: 9,
              }}
            />
          }
          title={"Revenue"}
          value={123}
        />
      </Space>
      <Space>
        <RecentOrders/>
        <VerticalBar/>
      </Space>
    </Space>
  );
}




export default Dashboard;

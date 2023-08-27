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
import { useEffect, useState } from "react";
import { getInventory, getOrders,  getUsers } from "~/API";

function Dashboard() {

  const [orders, setOrders] = useState(0)
  const [inventory, setInventory] = useState(0)
  const [users, setUsers] = useState(0)
  const [revenue, setRevenue] = useState(0)

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total)
      setRevenue(res.discountedTotal)
    })
    getInventory().then((res) => {
      setInventory(res.total)
    })
    getUsers().then((res) => {
      setUsers(res.total)
    })
    // getRevenue().then((res) => {
    //   setRevenue(res.total)
    // })
  },[])

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
          value={orders}
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
          value={inventory}
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
          value={users}
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
          value={revenue}
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

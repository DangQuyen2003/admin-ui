import {  Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import {  getOrders } from "~/API";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false)
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={3}>Orders</Typography.Title>
      <Table
      loading={loading}
        columns={[
          {
            title: "Tên sản phẩm",
            dataIndex: "title",
          },
          {
            title: "Giá tiền",
            dataIndex: "price",
            render: (value) => <span>${value}</span>
          },
          {
            title: "Giảm giá",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>
          },
          {
            title: "Số lượng",
            dataIndex: "quantity",
          },
          {
            title: "Tổng tiền",
            dataIndex: "total",
          },
        ]}

        dataSource={dataSource}
        pagination={{pageSize:6}}
      ></Table>
    </Space>
  );
}

export default Orders;

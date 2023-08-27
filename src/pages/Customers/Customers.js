import { Avatar, Image, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getUsers } from "~/API";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUsers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={3}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Hình ảnh",
            dataIndex: "image",
            render: (link) => {
              return (
                <Avatar style={{ borderRadius: 0, width: "100%" }}>
                  <Image src={link} style={{ width: 50, height: 30 }} />
                </Avatar>
              );
            },
          },
          {
            title: "Tên",
            dataIndex: "firstName",
          },
          {
            title: "Họ",
            dataIndex: "lastName",
          },
          {
            title: "Tuổi",
            dataIndex: "age",
          },
          {
            title: "Giới tính",
            dataIndex: "gender",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Số điện thoại",
            dataIndex: "phone",
          },
          {
            title: "Địa chỉ",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address},{address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{ pageSize: 6 }}
      ></Table>
    </Space>
  );
}

export default Customers;

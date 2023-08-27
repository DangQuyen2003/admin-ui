import { Avatar, Image, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "~/API";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false)
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={3}>Inventory</Typography.Title>
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
          },
          {
            title: "Đánh giá",
            dataIndex: "rating",
            render:(rating) => {
              return <Rate value={rating} allowHalf disabled />
            }
          },
          {
            title: "Cổ phần",
            dataIndex: "stock",
            
          },
          {
            title: "Hình ảnh",
            dataIndex: "thumbnail",
            render:(link) => {
              return <Avatar style={{borderRadius:0, width: "100%"}}  >
                <Image src={link} style={{width:50, height:30}} />
              </Avatar>
            }
          },
          {
            title: "Thương hiệu",
            dataIndex: "brand",
          },
          {
            title: "Xếp loại",
            dataIndex: "category",
          },
        ]}

        dataSource={dataSource}
        pagination={{pageSize:6}}
      ></Table>
    </Space>
  );
}

export default Inventory;

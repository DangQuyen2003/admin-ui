import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "~/API";
const HeaderPage = () => {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpens] = useState(false);
  const [notification, setNotification] = useState();

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });

    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="header-page">
      <Image
        width={40}
        style={{ borderRadius: "50%" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswMqSOZSPNqV2YjjxUcGO14AORsMp1IRjfodCHa3RVrjtiSDgS6ccRb7H81ncyjnqmvc&usqp=CAU"
        alt=""
      ></Image>
      <Typography.Title>DX Quyền</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpens(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotification(true);
            }}
          />
        </Badge>
      </Space>

      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpens(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Thông báo"
        open={notification}
        onClose={() => {
          setNotification(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return <List.Item>{item.title}</List.Item>;
          }}
        ></List>
      </Drawer>
    </div>
  );
};

export default HeaderPage;

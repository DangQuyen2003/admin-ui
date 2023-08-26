import { Badge, Image, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
const HeaderPage = () => {
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
        <Badge count={12} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={10}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default HeaderPage;

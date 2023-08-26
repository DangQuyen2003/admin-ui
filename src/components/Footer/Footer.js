import {
  FacebookOutlined,
  GithubOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";

const FooterPage = () => {
  return (
    <div className="footer-page">
      <Typography.Link href="tel:0389883957">
        <PhoneOutlined />
        0389883957
      </Typography.Link>
      <Typography.Link href="https://www.facebook.com/profile.php?id=100018055848125" target={"_blank"}>
        <FacebookOutlined />
        FaceBook
      </Typography.Link>
      <Typography.Link href="https://github.com/DangQuyen2003" target={"_blank"}>
        <GithubOutlined />
        GitHub
      </Typography.Link>
    </div>
  );
};

export default FooterPage;

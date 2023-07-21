import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const items = [
  {
    label: "Today",
    key: "1",
  },
  {
    label: "Last week",
    key: "2",
  },
  {
    label: "Last month",
    key: "3",
  },
];
const DropDown = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    {/* <a onClick={(e) => e.preventDefault()}> */}
    <Space>
      Choose Time
      <DownOutlined />
    </Space>
    {/* </a> */}
  </Dropdown>
);
export default DropDown;

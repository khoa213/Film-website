import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Select, Space } from "antd";
import { Option } from "antd/es/mentions";
import { useState } from "react";

const DropDown = ({ items, label, defaultValue, onChange }) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleSelect = (value) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div>
      <label>{label}</label>
      <br />
      <Select
        defaultValue={defaultValue}
        style={{ width: 120 }}
        onChange={handleSelect}
      >
        {items.map((item) => (
          <Option value={item.label} key={item.key}>
            {item.label}
          </Option>
        ))}
      </Select>
      {/* <p>Selected Gender: {selected}</p> */}
    </div>
  );
};

export default DropDown;

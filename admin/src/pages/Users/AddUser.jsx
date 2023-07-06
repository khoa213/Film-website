import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Select, DatePicker, Upload } from 'antd';

const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddUserWrapper = styled.div`
  height: 1000px;
`;

export const AddUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addUser } = useUserContext();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('');
  const [age, setAge] = useState('');
  // const [key,setKey] =useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();

    
    // Create a new user object
    const dataUsers=location.state.data;
    const newUser = {
      key:Math.floor(Math.random() * (1000000 - 13 + 1)) + 13,
      id: Math.floor(Math.random() * (1000000 - 13 + 1)) + 13,
      name,
      age,
      dob,
      role,
      email
    };

      const dataAddUsers=[...dataUsers,newUser];
        // console.log(dataAddUsers);
    // Add the new user using the addUser function from the context
    addUser(dataAddUsers);
    // Navigate back to the "Users" page
    navigate('/users');
  };
  const handleBack=(e) => {
    e.preventDefault();
    navigate('/users');
  }

  return (
    <AddUserWrapper>
      <h2>Add User</h2>
      <Form
        // onSubmit={handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Full Name">
          <Input type="text" onChange={(e) => setName(e.target.value)
          } />
        </Form.Item>
        <Form.Item label="Email">
          <Input type="email"  onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item label="Role">
          <Select onChange={(value) => setRole(value)}>
            <Select.Option value="1">Admin</Select.Option>
            <Select.Option value="2">Quanly</Select.Option>
            <Select.Option value="3">NhanVien</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Day of Birth">
          <DatePicker onChange={(date) => setDob(date.format().substring(0,10))} />
        </Form.Item>
        <Form.Item label="Age">
          <InputNumber onChange={(value) => setAge(value)} />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Submit New User">
          <Button  onClick={handleSubmit}>Add</Button>
        </Form.Item>
        <Form.Item label="Cancel">
          <Button  onClick={handleBack}>back</Button>
        </Form.Item>
      </Form>
    </AddUserWrapper>
  );
};

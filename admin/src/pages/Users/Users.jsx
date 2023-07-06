import React, { useEffect, useState } from 'react'
import { Button, Table } from 'antd';
import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useUserContext } from '../../../src/context/UserContext.js';
import useFetchData from 'data/useFetchData.js';
import Excel from 'components/Excel/Excel';
const primaryButtonStyle = { backgroundColor: '#1890ff' };
const dangerButtonStyle = { backgroundColor: '#ff4d4f' };
const customButtonStyle = { backgroundColor: '#fadb14', color: '#000000' };

// const initData = [];
// for (let i = 1; i <= 12; i++) {
//   initData.push({
//     id: i,
//     fullname: `bao${i}`,
//     age: 32,
//     dob: `2001-05-02`,
//     role:1,
//     email:`bao${i}@gmail.com`
//   });
// }
  const UsersTable=styled.div`
    .custom-row {
      height: 70px; /* Set the desired height for the rows */
    }
    .btn-users {
      width: 70px;
      height:40px;
      margin-right:10px;
      
    }
    .btn-export{
      width: 120px;
            height:40px;
            margin-right:10px;
            border:none;
            background-color:green;
            color:white;
    }
    .top-table-users {
      width: 100%;
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
    .box-img{
      display:flex;
      align-items:center;
      .img-product{
        width: 40px;
        height: 40px;
        border-radius:50%;
        border:1px solid #ccc;
      }
    }
  `
 const Users = () => {
 
const columns = [
  {
    title: 'ID',
    width: 100,
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
  },
  {
    title: 'Name',
    width: 150,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 50,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  
  {
    title: 'Date of Birth',
    dataIndex: 'dob',
    key: 'dob',
    width: 150,
  },

  {
    title: 'Avatar',
    dataIndex: 'address',
    key: '5',
    width: 100,
    render:()=>(
      <div className='box-img'>
              <img className='img-product' src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png" alt="" />
            </div>
    )
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: '6',
    width: 150,
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: '1',
    width: 100,
    render: (role) => {
      if (role === "1") {
        return 'Admin';
      } else if (role === "2") {
        return 'Quan ly';
      } else {
        return "Nhân viên"; // Handle other cases if needed
      }
    },
  },
  
  {
    title: 'Status',
    dataIndex: 'address',
    key: '4',
    width: 150,
    render: (status) => {
      if (status === "1") {
        return 'Online';
      } else if (status === "2") {
        return 'Offline';
      } else {
        return "Offline"; // Handle other cases if needed
      }
    },
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 200,
    render: (_, user) => (
      
      <div>
      <Button  className=' btn-delete btn-users' type="primary" danger
      id={user.id}
      
       onClick={() => {handleDeleteUser(user.id)
      // console.log(user.key)
    }}
      >Xóa</Button>
      <Button className='btn-users'
      onClick={() => handleUpdateUser(user.id)}
       style={customButtonStyle}>Sửa</Button>

      </div>
      
    
    ),
  },
];
const initData=useFetchData();
  const { users } = useUserContext();
  const navigate = useNavigate();
  const [data, setData] = useState(initData);
  // const [updatedUsers, setUpdatedUsers] = useState(users);
  // console.log(data)
  useEffect(() => {
   
  
    let updatedData
    if(users.length >1){

      updatedData = users;
    }
    else{
      updatedData = initData.concat(users);
    }
    //tao key cho data
    const keynext = updatedData.length;
    if (users.length ===1) {
      updatedData[updatedData.length - 1].id = keynext;
    }
    //setData
    setData(updatedData);
  }, [users,initData]);
  const handleDeleteUser = ( id) => {
    const updatedData = data.filter((user) => user.id !== id);
    setData(updatedData);
    console.log('Deleted ID:', id);
  };
  const handleUpdateUser=(id) => {
   
    // console.log(data);
    
    navigate(`/users/update/${id}`, { state: { data: [...data] } });
   
  }
  const handleAddUser = () => {
  
    // Perform logic to add a new user to the data source
    

    // if(users.length > 0) {

    //   setData((data) => [...data, users]);
 
    // }
    // else{
    //   setData(data);
         
    // }
  
    //     console.log(updatedUsers);
    navigate('/users/add', { state: { data: [...data] } });

    // console.log(location)
  };


  return (
    <UsersTable>
      <div className="top-table-users">

        <h1>Users List</h1>
        <div className="btn-add">
        <Excel
          fileName="export-user"
          data={[
            {
              columns: [
                {
                  title: "User Id",
                  dataIndex: "id",
                  width: 5,
                },
                {
                  title: "Name",
                  dataIndex: "name",
                  width: 20,
                },
                {
                  title: "Email",
                  dataIndex: "email",
                  width: 50,
                },
              ],
              data: data,
              tabName: "info",
            },
            {
              columns: [
                {
                  title: "Role",
                  dataIndex: "role",
                  width: 30,
                },
                {
                  title: "Phone",
                  dataIndex: "phone",
                  width: 30,
                },
              ],
              data: data,
              tabName: "contact",
            },
          ]}
        >
          <Button className='btn-export'>Export users</Button>
        </Excel>
         <Button onClick={()=>handleAddUser()} className='btn-users' type="primary" style={primaryButtonStyle}>Thêm</Button>
        </div>
      </div>
              <Table
          columns={columns}
          dataSource={data}
          columnWidth={40}
          rowClassName={() => 'custom-row'}
          scroll={{
          x: 1500,
          y:500,
        }}
      />
    </UsersTable>
  )
}

export default Users
import { Button, Col, Row, Table } from "antd";
import CardTransfer from "components/CardTransfer";
import React from "react";
import styled from "styled-components";
import { EyeOutlined } from "@ant-design/icons";
import TopRate from "components/TopRate";
import UserProduct from "components/UserProduct";
import BarChartComponent from "components/BarChart/BarChart";
import DropDown from "components/Dropdown/Dropdown";
import PieChartComponent from "components/PieChart/PieChart";
import CardCategory from "components/CardCategory";
import Search from "antd/es/input/Search";
const primaryButtonStyle = { backgroundColor: "#1890ff" };
const dangerButtonStyle = { backgroundColor: "#ff4d4f" };
const customButtonStyle = { backgroundColor: "#fadb14", color: "#000000" };
const DashboardWrapper = styled.div`
  .top-category {
    .top-category-top {
      display: flex;
      justify-content: space-between;
    }
    .top-category-bot {
      display: flex;
      .left {
        flex: 60%;
      }
      .right {
        flex: 40%;
      }
    }
  }
  .category {
    height: 400px;
    .recharts-responsive-container {
      margin: none !important;
    }
  }
  .part-one {
    min-height: 500px;
    background-color: var(--body-content-light-background) !important;
    /* margin-right: -12px; */
  }
  .part-two {
    min-height: 400px;
    background-color: var(--body-content-light-background) !important;
    /* margin-right: -12px; */
    .ant-space {
      background-color: var(--body-dark-background);
      padding: 0 20px;
      margin-right: 12px;
      margin-top: 6px;
    }
  }
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 20px;
  margin: 0;
  color: white;
  /* background-color: red; */
  .custom-table .ant-table-wrapper {
    background-color: var(--body-content-light-background);
  }

  .custom-table .ant-table-thead > tr > th {
    background-color: var(--body-content-light-background);
    color: white;
  }

  .custom-table .ant-table-tbody > tr > td {
    background-color: var(--body-content-light-background);
    color: white;
    border-color: darkgray;
  }

  /* .custom-table .ant-table-tbody > tr {
    background-color: black;
    color: white;
  } */

  .custom-table .ant-table-tbody > tr:hover {
    background-color: darkslategray;
  }

  .custom-table .ant-table-tbody > tr:hover td {
    color: red;
    background-color: darkslategray;
  }
  .recent-film {
    display: flex;
    justify-content: space-between !important;
    width: 100%;
    align-items: center;
    .search-input {
      margin-left: auto;
    }
  }
  .btn-users {
    width: 70px;
    height: 40px;
    margin-right: 10px;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
`;

const GridItem = styled.div`
  /* background-color: #f0f0f0; */
  padding: 8px;
`;

const data = [1, 2, 3, 4, 5, 6];
const style = {
  background: "var(--body-content-light-background)",
  padding: "8px 0",
};
const rowStyles = {
  marginBottom: "24px", // Add desired margin bottom value
  marginLeft: "12px",
  marginTop: "24px",
};
const marginBottom = {
  marginBottom: "24px",
};
const dataChart = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 150 },
  { name: "Group D", value: 350 },
];
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#84b51b",
  "#06aec1",
];
const columns = [
  {
    title: "Movie",
    width: 200,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Rating",
    width: 100,
    dataIndex: "rate",
    key: "rate",
    fixed: "left",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "1",
  },
  {
    title: "Download/View",
    dataIndex: "dov",
    key: "2",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "3",
  },

  {
    title: "Liked",
    dataIndex: "liked",
    key: "4",
  },

  // {
  //   title: "Action",
  //   key: "operation",
  //   fixed: "right",
  //   width: 200,
  //   render: (_, user) => (
  //     <div>
  //       <Button
  //         className=" btn-delete btn-users"
  //         type="primary"
  //         danger
  //         id={user.id}
  //         onClick={() => {
  //           // handleDeleteUser(user.id);
  //           // console.log(user.key)
  //         }}
  //       >
  //         Xóa
  //       </Button>
  //       <Button
  //         className="btn-users"
  //         // onClick={() => handleUpdateUser(user.id)}
  //         style={customButtonStyle}
  //       >
  //         Sửa
  //       </Button>
  //     </div>
  //   ),
  // },
];
const dataTable = [
  {
    key: "1",
    name: "John Brown",
    rate: 3.1,
    category: "New York Park",
  },
  {
    key: "2",
    name: "John Brown 2",
    rate: 3.2,
    category: "New York Park",
  },
];
const Dashboard = () => {
  const onSearch = (value) => console.log(value);
  return (
    <DashboardWrapper>
      <Row gutter={48} style={marginBottom}>
        <Col className="gutter-row part-one" span={16}>
          <Row gutter={24} style={rowStyles}>
            <Col className="gutter-row" span={6}>
              <CardTransfer
                speed={80}
                transfer={55}
                unit={"K"}
                title={"Viewer"}
                colorCircle={"#e7141b"}
                iconCard={<EyeOutlined />}
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <CardTransfer
                speed={80}
                transfer={55}
                unit={"K"}
                title={"Viewer"}
                colorCircle={"#14E788"}
                iconCard={<EyeOutlined />}
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <CardTransfer
                speed={-80}
                transfer={55}
                unit={"K"}
                title={"Viewer"}
                colorCircle={"#e78514"}
                iconCard={<EyeOutlined />}
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <CardTransfer
                speed={80}
                transfer={55}
                unit={"K"}
                title={"Viewer"}
                colorCircle={"#1b14e7"}
                iconCard={<EyeOutlined />}
              />
            </Col>
          </Row>
          <Row gutter={0}>
            <Col className="gutter-row" span={24}>
              <div style={style}>
                <TopRate />
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row " span={8}>
          <div className="part-one" style={style}>
            <UserProduct />
          </div>
        </Col>
      </Row>
      <Row gutter={24} style={marginBottom}>
        <Col className="gutter-row " span={8}>
          <div className="part-two">
            <div className="category" style={style}>
              <h1>Category</h1>
              <BarChartComponent />
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={16}>
          <div className="part-two">
            <div className="top-category" style={style}>
              <div className="top-category-top">
                <h1>Top Category</h1>
                <DropDown />
              </div>
              <div className="top-category-bot">
                <div className="left">
                  <GridContainer>
                    {data.map((item, index) => (
                      <GridItem key={index}>
                        <CardCategory />
                      </GridItem>
                    ))}
                  </GridContainer>
                </div>
                <div className="right">
                  <PieChartComponent data={dataChart} colors={COLORS} />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="recent-film">
          <h1>Recently Viewed Film</h1>
          <Search
            // className="search-input "
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </div>
        <Table
          columns={columns}
          dataSource={dataTable}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
          className="custom-table"
        />
      </Row>
    </DashboardWrapper>
  );
};

export default Dashboard;

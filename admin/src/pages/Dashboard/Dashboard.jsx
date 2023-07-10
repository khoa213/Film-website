import { Col, Row, Table } from "antd";
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
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Age",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
  },
  {
    title: "Column 6",
    dataIndex: "address",
    key: "6",
  },
  {
    title: "Column 7",
    dataIndex: "address",
    key: "7",
  },
  {
    title: "Column 8",
    dataIndex: "address",
    key: "8",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];
const dataTable = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  },
];
const Dashboard = () => {
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
      <Row gutter={24}>
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

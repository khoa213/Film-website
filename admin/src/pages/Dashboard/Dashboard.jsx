import React from 'react';
import styled from 'styled-components';
import { Button, Col, Dropdown, Row, Space ,message } from 'antd';
import CardTransfer from '../../components/CardTransfer';
import { DollarOutlined ,DownOutlined,UserOutlined } from '@ant-design/icons';
import ChartComponent from '../../components/Chart/Chart';
import { Overview } from 'components/Overview';
import ChartPie from 'components/ChartPie';
import { CardBar } from 'components/CardBar';
import { CardProductBar } from 'components/CardProductBar';
import { PercentBar } from 'components/PercentBar';


const DashboardWrapper = styled.div`
/* display: flex;
flex-direction:row; */
width: 100%;
overflow-x:hidden;
padding-bottom:20px;
/* .chart{
  margin:0 auto;
  .chart-item{
    display: flex;
    justify-content:center;
    margin:20px 0;
    background-color:#fff;
    border-radius:20px;
    padding:40px 10px;
    
  }
  .chart-item-2{
    margin-left:auto;
  }
  
  } */
  
  .top-desc{
    display: flex;
    justify-content:space-between;
    align-items:center;
    .ant-dropdown-trigger{
      width: 120px;
      height: 35px;
      /* padding:0 40px; */
      background: #FFF8E5;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
    }
    .revenue{
      margin-bottom:20px;
      p{
        height:28px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;

        color: #A7A7A7;
        margin:0;
      }
      h1{
        margin:0;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 42px;

        color: #000000;
      }
    }
  }
  .chart-pie-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    /* gap: 10px; */
    height: 100%; /* Thiết lập chiều cao của grid container */
    width:100%;
    margin-left:-20px;
    .grid-item {
      /* width:30%; */
      display: flex;
      flex-direction:column; /*
      /* background-color: #ddd; */
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    
    /* padding: 20px; */
    /* scale:0.6; */
  }
  }
  .top-bar{
    display: flex;
    justify-content:space-between;
    align-items:center;
    }
`;const style = {
  background: '#fff',
  padding: '20px 40px',
  borderRadius:"20px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  height: "60vh",
};
const style2 = {
  background: '#fff',
  padding: '20px 40px',
  borderRadius:"20px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  height: "40vh",
};
const styleRow = {
 marginBottom:"20px",
};

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const data1 = [
  { name: 'Progress', value: 85 }, // Giá trị phần trăm của đường tròn
  { name: 'Remaining', value: 100 - 85 }, // Giá trị phần trăm còn lại
];
const data2 = [
  { name: 'Progress', value: 85 }, // Giá trị phần trăm của đường tròn
  { name: 'Remaining', value: 100 - 85 }, // Giá trị phần trăm còn lại
];
const data3 = [
  { name: 'Progress', value: 85 }, // Giá trị phần trăm của đường tròn
  { name: 'Remaining', value: 100 - 85 }, // Giá trị phần trăm còn lại
];
const data4 = [
  { name: 'Progress', value: 85 }, // Giá trị phần trăm của đường tròn
  { name: 'Remaining', value: 100 - 85 }, // Giá trị phần trăm còn lại
];
const Dashboard = () => {
  return (
    <DashboardWrapper>
      {/* <div className="top-dash">
        <Row gutter={24}>
          <Col className="gutter-row" span={6}>
            <CardTransfer speed={30} money={2360} title={"Today's Sales"}>
              <DollarOutlined />
            </CardTransfer>
          </Col>
          <Col className="gutter-row" span={6}>
            <CardTransfer speed={30} money={2360} title={"Today's Sales"}>
              <DollarOutlined />
            </CardTransfer>
          </Col>
          <Col className="gutter-row" span={6}>
            <CardTransfer speed={30} money={2360} title={"Today's Sales"}>
              <DollarOutlined />
            </CardTransfer>
          </Col>
          <Col className="gutter-row" span={6}>
            <CardTransfer speed={30} money={2360} title={"Today's Sales"}>
              <DollarOutlined />
            </CardTransfer>
          </Col>
        </Row>
        <Row gutter={0} className='chart'>
          

            <Col className="chart-item gutter-row" span={10}>
              <ChartComponent />
            </Col>
            <Col className="chart-item chart-item-2 gutter-row" span={13}>
              <LineChart />
            </Col>
         
        </Row>
        
      </div> */}
      <Row style={styleRow} gutter={24} >
      <Col  className="gutter-row column" span={16}>
        <div style={style}>
          <div className="top-desc">
            <div className="revenue">

              <p>Total Revenue</p>
              <h1>$980,273.00</h1>
            </div>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  This year
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <ChartComponent />
          {/* <div className="chart">
            <ChartComponent  />
          </div> */}
        </div>
      </Col>
      <Col className="gutter-row column" span={8}>
        <div style={style}>
          <Overview title={"Customers"} desc={"Information About your Customers"} >
            <div className="chart-pie-wrapper">
              <div className="grid-item"> <ChartPie color={"#5F27CD"} percent={85} text={"Current Customers"}/>
               
              </div>
              <div className="grid-item"> <ChartPie color={"#6C6C6C"}  percent={66} text={"Current Customers"}/>
              
              </div>
              <div className="grid-item"> <ChartPie color={"#FF8918"}  percent={90} text={"Current Customers"}/>
              
              </div>
              <div className="grid-item"> <ChartPie color={"#FF6F61"}  percent={30} text={"Current Customers"}/>
              
              </div>
           
            </div>
            
          </Overview>
             {/* <div>sdsad</div> */}
        </div>
      </Col>
     
     </Row>

     <Row gutter={24} >
      <Col  className="gutter-row column" span={16}>
        <div style={style2}>
            <div className="top-bar">
              <CardBar title={"Total Visits"} qual={"10.8m"}/>
              <CardBar title={"Total Sales"} qual={100.345}/>
              <CardBar title={"Total Mades"} qual={"200k$"}/>
              <CardBar title={"Orders Completed"} qual={30000}/>
            </div>
            <h1>Top Products</h1>
            <div className="top-product-bar">
              <CardProductBar name="Nike Jordan 1 2019" type={"Pink - 50 orders"}/>
              <CardProductBar name="Gucci Winter 2023" type={"Red - 103 orders"}/>

            </div>
        </div>
      </Col>
      <Col className="gutter-row column" span={8}>
        <div style={style2}>
          <Overview title={"Target Customers"} desc={"Information about store visits"} >
            <PercentBar title={"Women"} percent={63} color={"#6C6C6C"}/>
            <PercentBar title={"Men"} percent={88} color={"#FF6B6B"}/>

            <PercentBar title={"Kids"} percent={38} color={"#5F27CD"}/>

            
          </Overview>
             {/* <div>sdsad</div> */}
        </div>
      </Col>
     
     </Row>
  
    </DashboardWrapper>
  );
};

export default Dashboard;

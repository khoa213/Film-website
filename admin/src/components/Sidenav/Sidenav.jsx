import { Menu } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const SideNavWrapper = styled.div`
.ant-menu{
  border-inline-end:none !important;
  
  .ant-menu-item {
    font-weight:600;
    font-size:20px;
    margin-bottom:20px;
    svg{
      width:20px;
      height:20px;
    }
      &.ant-menu-item-selected {
        a {
          color: #FF6F61 !important;
         
        }
        
      }
    }
    .ant-menu-item {
      &.ant-menu-item-selected {
       
          background-color:white !important;
        
          svg {
            fill: #FF6F61 !important;
          }
      }
      
    }
}
  .logo-sidebar{
    color:#000;
    font-size:26px;
    font-weight:600;
    font-family:'Times New Roman', Times, serif;
    display:flex;
    justify-content:center;
    align-items:center;
    height:60px;
    padding-top:30px;
    margin-bottom:60px;
  }
`
const Sidenav = ({items}) => {
  return(

  <SideNavWrapper>
        
        <div  className="logo-sidebar">DarkB Admin</div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} >
        {items.map((item) => (
          <Menu.Item className="custom-navlink" key={item.key} icon={item.icon}>
            <NavLink to={item.link} >{item.label}</NavLink>
          </Menu.Item>
        ))}
        </Menu>
    </SideNavWrapper>
  )
}
export default Sidenav

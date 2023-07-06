import React from 'react'
import styled from 'styled-components'
import OverviewIcon from "../../assets/images/overview-icon.svg"
const OverviewWrapper = styled.div`
/* padding:20px; */
    .title{
        display: flex;
        justify-content:space-between;
        align-items:center;
        h1,p{
            margin:0;
        }
        h1{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 35px;

            color: #535353;
        }
        p{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #A7A7A7;
        }
        img{
            width:20px;
            height:20px;
        }
    }
`
export const Overview = ({title,desc,children}) => {
  return (
    <OverviewWrapper>
        <div className="title">
            <div className="left">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <img src={OverviewIcon} alt="" />
        </div>
        {children}
    </OverviewWrapper>
  )
}

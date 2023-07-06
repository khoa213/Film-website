import { Card } from 'antd'
import React from 'react'
import styled from 'styled-components'
const CardCustom= styled(Card)`
    height: 120px;
    border:none;
    position:relative;
    .ant-card-head{
        border-bottom:none;
        min-height:auto;
        padding:20px 20px;
        margin-bottom:0;

    }
    .ant-card-body{
        padding:0 20px;
        font-weight:700;
        font-size:30px;
        display:flex;
        .speed{
            color:green;
            font-size:16px;
            padding-top:16px;
            padding-left:10px;
        }
        
        .icon-trans{
            background-color:#1890ff;
            height:60px;
            width:60px;
            margin-left:auto;
            border-radius:10px;
            position:absolute;
            right:20px;
            transform:translateY(-60%);
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
`
const CardTransfer = ({title,money,children,speed}) => {
  return (
    <CardCustom title={title}  bordered={false}>
        <span className='money'>${money}</span> 
        <span className='speed'>%{speed}</span> 

        <div className='icon-trans'>
            <div  style={{ fontSize: '30px', color: '#fff' }}>{children}</div>
            </div>
     </CardCustom>
  )
}
export default CardTransfer

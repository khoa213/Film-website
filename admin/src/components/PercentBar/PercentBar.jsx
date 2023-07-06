import React from 'react'
import styled from 'styled-components'
const Wrapper =styled.div`
position: relative;
margin-top:20px;
    .total{
        width: 100%;
        height: 8px;
        background-color:#EEEEEE;
        border-radius:4px;
        position:relative;
        p{
        /* position:absolute; */
       transform:translate(90%,60%)
    }
    }
    .percent{
        position:absolute;
        background-color:${(props) => props.color};
        width: ${(props) => props.percent +'%'};
        height: 8px;
        border-radius:4px;
    }
   
`
export const PercentBar = ({title,percent,color}) => {
  return (
    <Wrapper percent={percent} color={color}>
        <p>{title}</p>
        <div className="total">
            <div className="percent">

            </div>
        <p>{percent}%</p>
        </div>
    </Wrapper>
  )
}

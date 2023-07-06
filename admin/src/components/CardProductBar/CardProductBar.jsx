import React from 'react'
import styled from 'styled-components'
import ProductBar1 from "../../assets/images/product-bar1.svg"
const Wrapper = styled.div`
    display: flex;
    align-items:center;
    margin-bottom:20px;
    background: #EEEEEE;
    border-radius: 10px;
    padding: 10px;
    h1,p{
        margin: 0;
    }
    .left{
        flex:40%;
        display: flex;
        align-items:center;
    
            h1{
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 22px;
                /* identical to box height */

                text-transform: capitalize;

                /* Dark */

                color: #000000;
                
            }
            p{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;

                color: #7B7878;
            }
    }
    .right{
        flex:60%;
        display: flex;
        align-items:center;
        justify-content:space-between;
        .item{
            display: flex;
            flex-direction: column;
            align-items:center;
        }
        h1{
                        font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            /* identical to box height */


            color: #7B7878;
                
            }
            p{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 16px;

                color: #000000;
            }
    }
`
export const CardProductBar = ({name,type}) => {
  return (
   <Wrapper>
        <div className="left">
            <img src={ProductBar1} alt="" />
            <div className="inform">
                <h1>{name}</h1>
                <p>{type}</p>
            </div>
        </div>
        <div className="right">
            <div className="item">
                <h1>Inventory</h1>
                <p> 50 </p>
            </div>
            <div className="item">
                <h1>Sale</h1>
                <p> 50 </p>
            </div>
            <div className="item">
                <h1>Price</h1>
                <p> 50</p>
            </div>
            <div className="item">
                <h1>Today</h1>
                <p>50</p>
            </div>
        </div>
   </Wrapper>
  )
}

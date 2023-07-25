import React from "react";
import styled from "styled-components";
import CheckIcon from "../../assets/images/checkmark.png";
import CancelIcon from "assets/images/cancelmark.svg";
import { Button } from "components/Button";

const Wrapper = styled.div`
  background-color: #191919;
  /* margin: 100px 150px; */
  .container {
    padding: 40px;
    color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  .pack {
  }
  .none-bg {
    background-color: #191919 !important;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto; /* Adjusted column configuration */
  grid-auto-rows: 0.5fr; /* Adjusted row configuration */
  grid-gap: 24px;
`;

const GridHead = styled.div`
  position: relative;
  background-color: #1b9aa5;
  opacity: 0.9;
  border-radius: 20px;
  padding: 20px;
  height: 120px; /* Updated height value */

  .tag {
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    height: 60px;
    width: 100px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
  }
  .pack-price {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    .price-item {
      font-size: 30px;
      font-weight: bold;
    }
    .time-pack {
      font-size: 26px;
      font-weight: 500;
      margin-top: 20px;
    }
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 20px;

  img {
    height: 40px;
    width: 40px;
  }
  .big-icon {
    height: 55px !important;
    width: 55px !important;
    margin-top: 5px;
  }

  font-size: 16px;
  font-weight: 500;
`;
const PackMovie = () => {
  return (
    <Wrapper>
      <div className="container">
        <GridContainer>
          <GridHead className="none-bg"></GridHead>
          <GridHead id="1" className="pack">
            <div className="tag">
              <span>Free</span>
            </div>

            <div className="pack-price">
              <span className="price-item">$0</span>
              <span className="time-pack">/ month</span>
            </div>
          </GridHead>

          <GridHead id="2" className="pack">
            <div className="tag">
              <span>Free</span>
            </div>

            <div className="pack-price">
              <span className="price-item">$0</span>
              <span className="time-pack">/ month</span>
            </div>
          </GridHead>
          <GridHead id="3" className="pack">
            <div className="tag">
              <span>Free</span>
            </div>

            <div className="pack-price">
              <span className="price-item">$0</span>
              <span className="time-pack">/ month</span>
            </div>
          </GridHead>

          <GridItem className="title-pack-item">
            Ad Free Entertainment{" "}
          </GridItem>
          <GridItem>
            <img src={CancelIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>
          <GridItem>
            <img src={CancelIcon} alt="" />
          </GridItem>

          <GridItem className="title-pack-item">Hollywood Movies </GridItem>
          <GridItem>
            <img src={CancelIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>

          <GridItem className="title-pack-item">New Movies </GridItem>
          <GridItem>
            <img src={CancelIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>

          <GridItem className="title-pack-item">Streamit Special </GridItem>
          <GridItem>
            <img src={CancelIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>
          <GridItem>
            <img className="big-icon" src={CheckIcon} alt="" />
          </GridItem>
        </GridContainer>
      </div>
    </Wrapper>
  );
};
export default PackMovie;

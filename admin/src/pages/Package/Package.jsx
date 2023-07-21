import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .title-pack {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #363636;
    margin-bottom: 20px;
  }
  .title-pack::before {
    content: var(--before-content);
    display: inline-block;
    width: 140px;
    height: 30px;
    background-color: red;
    position: absolute;
    top: -16px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const style1 = {
  padding: "8px 0",
  height: "150px",
  backgroundColor: "var(--body-content-light-background)",
  color: "white",
  display: "flex",
  justifyContent: "center",
  fontSize: "36px",
  paddingTop: "20px",
};
const style = {
  padding: "8px 20px",
  height: "50px",
  backgroundColor: "var(--body-content-light-background)",
  color: "white",
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
};

const Package = () => {
  return (
    <Wrapper>
      <Row gutter={24}>
        <Col className="gutter-row" span={6}>
          <div></div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div
            className="title-pack"
            style={{
              ...style1,
              "--before-content": "'Free'",
            }}
          >
            Free
          </div>
        </Col>

        <Col className="gutter-row" span={6}>
          <div
            className="title-pack"
            style={{
              ...style1,
              "--before-content": "'MONTH'",
            }}
          >
            $10/per month
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div
            className="title-pack"
            style={{
              ...style1,
              "--before-content": "'YEAR'",
            }}
          >
            $100/per year
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={6}>
          <p style={style}>New Movie</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={6}>
          <p style={style}>New Movie</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={6}>
          <p style={style}>New Movie</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={6}>
          <p style={style}>New Movie</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={6}>
          <p style={style}>New Movie</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p style={style}>Yes</p>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Package;

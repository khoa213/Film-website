import TextArea from "antd/es/input/TextArea";
import Input from "components/Input";
import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 20px;
  color: var(--body_color);
  background-color: var(--body-content-light-background);
  h3 {
    margin: 0 0 20px 0;
    font-size: 20px;
  }
  .ant-input-affix-wrapper textarea {
    border: 1px #000 solid !important;
    background-color: var(--body-dark-background);
  }
`;
export const AddGenre = () => {
  return (
    <Wrapper>
      <h3>Add Genre</h3>
      <Input
        width={400}
        height={40}
        textColor={"var(--body_color)"}
        bgColor={"var(--body-dark-background)"}
        boderColor={"var(--body-dark-background)"}
        fontSize={16}
        borderRadius={5}
        placeholder={"Name For Movie"}
        // id={id}
        name={"name"}
        // onChange={onChange}
        type={"text"}
        // value={value}
      ></Input>
      <TextArea
        className="textarea"
        showCount
        maxLength={100}
        style={{
          height: 300,
          marginBottom: 24,
        }}
        // onChange={onChange}
        placeholder="Description for the movie"
      />
    </Wrapper>
  );
};

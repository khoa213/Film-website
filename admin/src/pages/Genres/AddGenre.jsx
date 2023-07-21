import { Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Button } from "components/Button";
import Input from "components/Input";
import React, { useState } from "react";
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
    border: 1px solid black !important;
    background-color: var(--body-dark-background);
    color: white;
  }
  /* Thay đổi màu placeholder thành màu trắng */
  .ant-input-affix-wrapper textarea::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #888888;
  }

  .ant-input-affix-wrapper textarea::-moz-placeholder {
    /* Firefox 19+ */
    color: white;
  }

  .ant-input-affix-wrapper textarea:-ms-input-placeholder {
    /* IE 10+ */
    color: white;
  }

  .ant-input-affix-wrapper textarea:-moz-placeholder {
    /* Firefox 18- */
    color: white;
  }
  .ant-input-data-count {
    color: white;
  }
  .radio {
    color: white;
  }
  .btn-group {
    display: flex;
    margin-top: 20px;
    width: 220px;
    justify-content: space-between;
  }
`;
export const AddGenre = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  // console.log(name, desc);
  const formData = {
    name: name,
    desc: desc,
    status: selectedValue === 1 ? true : false,
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <Wrapper>
      <h3>Add Genre</h3>
      <Input
        width={400}
        height={40}
        textColor={"#fff"}
        bgColor={"var(--body-dark-background)"}
        boderColor={"var(--body-dark-background)"}
        fontSize={16}
        borderRadius={5}
        placeholder={"Name For Movie"}
        // id={id}
        name={"name"}
        onChange={(e) => setName(e.target.value)}
        type={"text"}
        // value={value}
        style={{ marginBottom: "20px" }}
      ></Input>
      <TextArea
        className="textarea"
        showCount
        maxLength={10000}
        style={{
          height: 200,

          marginBottom: 24,
          border: "1px solid black",
          color: "#fff",
        }}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description for the movie"
      />
      <h3>Status:</h3>
      <Radio.Group onChange={handleRadioChange} value={selectedValue}>
        <Radio className="radio" value={1}>
          Enable
        </Radio>
        <Radio className="radio" value={2}>
          Disable
        </Radio>
      </Radio.Group>
      <div className="btn-group">
        <Button
          width={100}
          height={40}
          textColor={"#fff"}
          bgColor={"red"}
          // boderColor={boderColor}
          fontSize={16}
          borderRadius={5}
          type={"submit"}
          onClick={() => handleSubmit()}
          // id={id}
          // className={className}
          // borderImage={borderImage}
        >
          Add
        </Button>
        <Button
          width={100}
          height={40}
          textColor={"#000"}
          bgColor={"#fff"}
          // boderColor={boderColor}
          fontSize={16}
          borderRadius={5}
          type={"submit"}
          // id={id}
          // className={className}
          // borderImage={borderImage}
        >
          Cancel
        </Button>
      </div>
    </Wrapper>
  );
};

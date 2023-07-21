import { login } from "Redux/Actions/UserActions";
import { Button } from "components/Button";
import Logo from "components/Logo/Logo";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Input from "components/Input";
import EmailIcon from "../../assets/images/email-icon.svg";
import PasswordIcon from "../../assets/images/password-icon.svg";
import { Divider } from "antd";

const Wrapper = styled.div`
  background-color: var(--background-signin-color);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    color: white;
  }
  .input_group {
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
  }
  .input {
    position: relative;
    box-shadow: -14.719192504882812px 17.347618103027344px 84.10966491699219px
      0px #0038ff26;

    box-shadow: 15.770564079284668px -13.667821884155273px 112.49666595458984px 0px
      #f8003b26;
  }

  .input-user::after,
  .input-password::after {
    position: absolute;
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    background-color: var(--color-primary);
    right: 0;
    top: 0;
    border-radius: 8px;

    /* background-size: cover; */
  }
  .input-user::after {
    background-image: url(${EmailIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
  .input-password::after {
    background-image: url(${PasswordIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
  .input::after svg {
    width: 20px; /* Đặt kích thước mong muốn cho SVG */
    height: 20px; /* Đặt kích thước mong muốn cho SVG */
    fill: var(--color-primary);
  }
  .remember-part {
    display: flex;
    justify-content: space-between;

    align-items: center;
  }
  .forgot-span {
    margin-top: -80px !important;
    color: #c4a5bc;
    font-size: 14px;
    text-decoration: underline;
  }
  .remember-password {
    display: flex;
    align-items: center;
  }

  .remember-password input[type="checkbox"] {
    display: none;
  }

  .remember-password label {
    margin-top: -80px;
    margin-left: 10px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }

  .remember-password label:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-right: 6px;
    vertical-align: text-bottom;
    background-color: white;
  }

  .remember-password input[type="checkbox"]:checked + label:before {
    background-color: var(--color-primary);
    box-shadow: 0px 0px 9px 1px #780eff, 0px 4px 4px 0px #00000040;
  }
  .btn-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn-signin {
    font-weight: 700;
    font-size: 22px;
    box-shadow: 0px 0px 9px 1px #780eff, 0px 4px 4px 0px #00000040;
    cursor: pointer;
    margin-top: 30px;
  }
  .btn-signup {
    font-weight: 700;
    font-size: 22px;
    /* box-shadow: 0px 0px 9px 1px #780eff, 0px 4px 4px 0px #00000040; */
    cursor: pointer;
    /* margin-top: 30px; */
  }
  /*
  .btn-signin:hover {
    background-color: #3311b9;
    cursor: pointer;
  } */
`;
const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, password);

    const formData = {
      username: username,
      password: password,
    };
    dispatch(login(formData));
  };
  return (
    <Wrapper>
      <Logo desc={"Login into your"} />

      <form onSubmit={submitHandler}>
        <div className="input_group">
          <div className="input input-user">
            <Input
              width={430}
              height={50}
              borderRadius={8}
              type="text"
              id="username"
              name="username"
              placeholder={"marvelous@email.com"}
              textColor={"var(--text-color-input)"}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="input_group">
          <div className="input input-user">
            <Input
              width={430}
              height={50}
              borderRadius={8}
              type="text"
              id="username"
              name="username"
              placeholder={"marvelous@email.com"}
              textColor={"var(--text-color-input)"}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="input_group input_group_pass ">
          <div className="input input-password">
            <Input
              width={430}
              height={50}
              borderRadius={8}
              type="password"
              id="password"
              name="password"
              placeholder={"Enter your password"}
              textColor={"var(--text-color-input)"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="input_group input_group_pass ">
          <div className="input input-password">
            <Input
              width={430}
              height={50}
              borderRadius={8}
              type="password"
              id="password"
              name="password"
              placeholder={"Enter your password"}
              textColor={"var(--text-color-input)"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="btn-form">
          <div
            style={{
              marginTop: "30px",
              height: "62px",
              position: "relative",
              border: "none",
              borderRadius: "50px",
              backgroundImage:
                "linear-gradient(228.09deg, #FF2CF7 -9.95%, rgba(251, 4, 123, 0.796875) 12.47%, rgba(255, 126, 188, 0.81) 30.87%, rgba(255, 255, 255, 0) 53.87%, rgba(73, 255, 233, 0.65) 70.34%, #130EFF 100.44%)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
            }}
          >
            <Button
              width={420}
              height={60}
              textColor="#fff"
              bgColor="var(--background-signin-color)"
              fontSize={22}
              borderRadius={50}
              type="submit"
              id="btn-signup"
              className="btn-signup"
            >
              CREATE ACCOUNT
            </Button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default SignUp;

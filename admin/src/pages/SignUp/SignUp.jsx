import { login, register } from "Redux/Actions/UserActions";
import { Button } from "components/Button";
import Logo from "components/Logo/Logo";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Input from "components/Input";

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
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
  }
  .input {
    position: relative;
    box-shadow: 0px 4px 4px 0px #00000040;

    box-shadow: 15.770000457763672px -13.670000076293945px 112.5px 0px #f8003b40;
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
  .policy {
    margin-top: 10px;
    color: #fff;
    text-align: center;
  }
`;
const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, password, email);

    const formData = {
      username: username,
      password: password,
      email: email,
    };
    dispatch(register(formData));
  };
  return (
    <Wrapper>
      <Logo desc={"Register"} />

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
              placeholder={"Username"}
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
              id="email"
              name="email"
              placeholder={"Email"}
              textColor={"var(--text-color-input)"}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder={"Confirm your password"}
              textColor={"var(--text-color-input)"}
              // onChange={(e) => setPassword(e.target.value)}
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
      <span className="policy">
        By clicking “Create Account” you agree to our
        <br /> <b>terms</b> and <b>privacy policy</b>.
      </span>
    </Wrapper>
  );
};
export default SignUp;

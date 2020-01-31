import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginBox } from "styled-icons/remix-line/LoginBox";

export const LoginBoxIcon = styled(LoginBox)`
  width: 45px;
  float: right;
  cursor: pointer;
  padding-top: 0.6rem;
  padding-right: 1rem;
  color: black;
  :hover {
    opacity: 0.5;
  }
`;

const LoginBtn = () => {
  return (
    <Link to={"/login"} style={{ textDecoration: "none" }}>
      <LoginBoxIcon></LoginBoxIcon>
    </Link>
  );
};

export default LoginBtn;

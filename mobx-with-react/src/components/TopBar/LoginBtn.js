import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const LoginBtn = () => {
    return (
        <Link to={"/login"} style={{ textDecoration: "none" }}>
            <LoginBtnLayout>
            Login
            </LoginBtnLayout>
        </Link>
      );
};

const LoginBtnLayout = styled.div`
    border-style: solid;
    
`;

export default LoginBtn;
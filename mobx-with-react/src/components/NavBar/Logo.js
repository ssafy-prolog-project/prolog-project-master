import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to={"/"} style={{textDecoration:"none"}}>
            <LogoLayout>
            Prolog;
            </LogoLayout>
        </Link>
      );
}

const LogoLayout = styled.div`
    padding: 0 2rem;
    margin-top: 1.75rem;
    margin-bottom: 1.75rem;
    font-size: 2rem;
    line-height: 2rem;
    font-family: Inconsolata;
    color: white;
    display: block;
    position: relative;
    cursor: pointer;
 
`;

export default Logo;
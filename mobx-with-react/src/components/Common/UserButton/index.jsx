import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

// 누르면 버튼으로 할 수 있는 동작 구현
const UserButton = () => {
    
    return (   
        <LINKS to={"/"} style={{ textDecoration: "none" }}>
            <Sample></Sample>
        </LINKS>
    )
}

export const LINKS = styled(Link)`
    display: inline-block;
    padding-left: 12rem;
    padding-top: 1rem;
    
`

const Sample = styled.div`
    /* grid-area: test; */
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    font-family: Inconsolata;
`;

export default UserButton;
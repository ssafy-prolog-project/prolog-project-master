import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ArrowBack } from "styled-icons/boxicons-regular/ArrowBack";

export const ArrowBackIcon = styled(ArrowBack)`
cursor: pointer;
margin-top: 1%;
margin-left: 1%;
margin-bottom: auto;
color: white;
height: 50px;
`;

const WriteTopBar = () => {
    return(
        <WriteTopBarLayout>
             <Link to={"/"} style={{textDecoration:"none"}}>
            <ArrowBackIcon></ArrowBackIcon>
            </Link>
        </WriteTopBarLayout>
    )
}

const WriteTopBarLayout = styled.div`
height: 28rem;
background-color: #1a3365;
`;

export default WriteTopBar;
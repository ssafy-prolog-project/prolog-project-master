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
    const SaveonClick = () => {
        alert("저장되었습니다.");
    }

    return(
        <WriteTopBarLayout>
             <Link to={"/"} style={{textDecoration:"none"}}>
            <ArrowBackIcon></ArrowBackIcon>
            </Link>
            <Link to={"/"} style={{textDecoration:"none"}}>
                <SaveBtn onClick={SaveonClick}>저장</SaveBtn>
            </Link>
        </WriteTopBarLayout>
    )
}

const WriteTopBarLayout = styled.div`
height: 28rem;
background-color: #1a3365;
`;

const SaveBtn = styled.div`
    border-radius: 5px;
    border-color: white;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    height: 30px;
    width: 60px;
    background-color: #1a3365;
    float: right;
    margin-top: 1%;
    margin-right: 1%;
    text-align: center;
    padding-top: 3px;
`;
export default WriteTopBar;
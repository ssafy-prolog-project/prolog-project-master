import React, {Component} from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserHead from "./UserHead";
import UserContent from "./UserContent"

class MyPage extends Component{
    render(){
        return(
            <MyPageLayout>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <MLogo>Prolog;</MLogo>
                </Link>
                <Div>
                    <UserHead></UserHead>
                    <UserContent></UserContent>
                </Div>
            </MyPageLayout>
        )
    }
}

const MyPageLayout = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 5rem 100%;

    @media (max-width: 1024px) {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        width: 100;
        height: 100%;
    }
`;

const MLogo = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
    text-align: left;
    cursor: pointer;
    color: black;
    font-size: 2rem;
    line-height: 3rem;
    font-family: Inconsolata;
    padding-top: 1rem;
`;

const Div = styled.div`
    font-family: Inconsolata;
    padding-top: 7%;
    padding-left: 15%;
    padding-right: 15%;
    height: 100%;
    display: grid;
    grid-template-rows: 23%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;

export default MyPage;
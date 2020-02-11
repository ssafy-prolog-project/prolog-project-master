import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { inject, observer } from "mobx-react"

@inject("userStore", "authStore")
@observer
class Title extends Component{
    render(){
        const {values} = this.props.authStore;
        const{accessToken,provider, id, name, profileimg} = values;

        return(
            <DIV>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <MLogo>ProLog;</MLogo>
                </Link>
                <TitleLayout>
                    <PorTitle>개발자 {name}의 포트폴리오</PorTitle>
                </TitleLayout>
            </DIV>
        )
    }
}

const DIV = styled.div``;

const MLogo = styled.div`
    grid-area: logo;
    padding-left: 1.5rem;
    align-items: end;
    cursor: pointer;
    color: white;
    font-size: 2rem;
    line-height: 2rem;
    font-family: Inconsolata;
    padding-top: 1rem;
`;

const PorTitle = styled.div`    
    text-align: center;
    font-size: 2.4rem;
    font-family: Noto Sans KR,sans-serif;
    border-right: .1em solid #fff;
    font-size: 4vw;
    white-space: pre;
    line-height: 1;
    letter-spacing: .1rem;
    padding-top: .2em;
    animation: blink 1s step-end infinite;
`

const TitleLayout = styled.div`
    /* justify-content: center;
    height: 100vh;
    width: 100%;
     background-color: black;
    grid-area: title; */

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-attachment: fixed;
    width: 100%;
`;

export default Title;
import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { inject, observer } from "mobx-react"
import {Edit} from 'styled-icons/boxicons-regular/Edit';

export const EditP = styled(Edit)`
    color: #DCDCDC;
    width: 1rem;
    height: 1rem;
    margin-bottom: 2.4rem;
`

@inject("userStore", "authStore")
@observer
class Title extends Component{
    render(){
        const {values} = this.props.authStore;
        const{accessToken,provider, id, name, profileimg} = values;

        return(
            <TitleLayout>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <MLogo>ProLog;</MLogo>
                </Link>
                <DIV>
                    <PorTitle>개발자 {name}의 포트폴리오<EditP/></PorTitle>
                </DIV>
            </TitleLayout>
        )
    }
}


const MLogo = styled.div`
    grid-area: logo;
    padding-left: 1.5rem;
    align-items: end;
    cursor: pointer;
    color: black;
    font-size: 2rem;
    line-height: 2rem;
    font-family: Inconsolata;
    padding-top: 1rem;
`;

const DIV = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

const PorTitle = styled.div`
    grid-area: title;
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

    display: grid;
    grid-template-rows: 10% 90%;
    grid-template-areas: 'logo' 'title';
    height: 100vh;
    width: 100%;
`;

export default Title;
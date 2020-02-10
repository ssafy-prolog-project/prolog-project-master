import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react"

@inject("userStore", "authStore")
@observer
class Title extends Component{
    render(){
        const {values} = this.props.authStore;
        const{accessToken,provider, id, name, profileimg} = values;

        return(
            <TitleLayout>
                <PorTitle>개발자 {name}의 포트폴리오</PorTitle>
            </TitleLayout>
        )
    }
}

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
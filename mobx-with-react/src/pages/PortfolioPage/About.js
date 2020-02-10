import React, { Component } from "react";
import styled from "styled-components";

class About extends Component{
    render(){
        return(
            <AboutLayout>
                <AbTitle>About ME</AbTitle>
                <AbContent>
                    <h3>테스트1</h3>
                    <h3>테스트2</h3>
                    <h3>테스트3</h3>
                </AbContent>
            </AboutLayout>
        )
    }
}

const AboutLayout = styled.div`
    grid-area: about;
    display: flex;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
`;

const AbTitle = styled.div`
    text-align: center;
    font-size: 2.4rem;
    margin-left: 6vw;
    margin-right: 12vw;
    width: 25vw;
    box-sizing: border-box;
    align-self: center;
`

const AbContent = styled.div`
    width: 100%;
    margin-bottom: 4rem;
    margin-top: 4rem;
    padding: 1rem;
    margin-right: 8vw;
`

export default About;
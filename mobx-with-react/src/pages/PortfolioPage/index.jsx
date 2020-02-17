import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Title from "./Title";
import About from "./About";
import Skills from "../../components/Portfolio/Skills";
import Project from "./Project";
import Contact from "./Contact";

class PortfolioPage extends Component{
    render(){
        return(
            
            <PortfolioLayout>
                <Title></Title>
                <About></About>
                <Skills></Skills>
                <Project></Project>
                <Contact></Contact>
            </PortfolioLayout>
        )
    }
}

const PortfolioLayout = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: auto;
    grid-template-areas: 'title' 'about' 'skills' 'project' 'contact';
`;

export default PortfolioPage;
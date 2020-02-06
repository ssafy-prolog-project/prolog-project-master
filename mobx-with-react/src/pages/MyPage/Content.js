import React, {Component} from 'react';
import styled from "styled-components";
import TabWrapper from "./TabWrapper"

class Content extends Component{
    render(){
        return(
            <ContentLayout>
                <SideWrapper>태그태그</SideWrapper>
                <TabWrapper></TabWrapper>
            </ContentLayout>
        )
    }
}

const ContentLayout = styled.div`
    padding-top: 1%;
    height: 97%;
    display: grid;
    grid-template-columns: 12rem;
    grid-template-areas: "nav content";
    @media (max-width: 768px) {
        grid-template-columns: 100%;
    }
    
`

const SideWrapper = styled.div`
    flex-shrink: 0;
    background-color: red;
   
    @media (max-width: 768px) {
        display: none
    }
`

export default Content;
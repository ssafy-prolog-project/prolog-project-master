import React, {Component} from 'react';
import styled from "styled-components";
import TabWrapper from "./TabWrapper"

class Content extends Component{
    render(){
        return(
            <ContentLayout>
                <SideWrapper>태그태그?</SideWrapper>
                <TabWrapper></TabWrapper>
            </ContentLayout>
        )
    }
}

const ContentLayout = styled.div`
    
`

const SideWrapper = styled.div`
    flex-shrink: 0;
    width: 12rem;
    @media (max-width: 768px) {
        display: none
  }
`

export default Content;
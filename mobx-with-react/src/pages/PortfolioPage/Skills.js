import React, { Component } from "react";
import styled from "styled-components";

class Skills extends Component{
    render(){
        return(
            <SkillsLayout>
                <SkTitle>Skills</SkTitle>
                <SkContent>
                    <h3>저는 이걸 잘해요</h3>
                    <h3>이것도 잘하고</h3>
                    <h3>저것도 잘해요!</h3>
                </SkContent>
            </SkillsLayout>
        )
    }
}

const SkillsLayout = styled.div`
    grid-area: skills;
    height: 100%;
    width: 100%;
`;

const SkTitle = styled.div`
    text-align: center;
    font-size: 2.4rem;
`
const SkContent = styled.div`
    text-align:center;
`

export default Skills;
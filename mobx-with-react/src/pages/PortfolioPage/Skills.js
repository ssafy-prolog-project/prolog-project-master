import React, { Component } from "react";
import styled from "styled-components";
import {Edit} from 'styled-icons/boxicons-regular/Edit';

export const EditP = styled(Edit)`
    color: #DCDCDC;
    width: 1rem;
    height: 1rem;
    margin-bottom: 2.4rem;
`

class Skills extends Component{
    render(){
        return(
            <SkillsLayout>
                <SkTitle>Skills<EditP/></SkTitle>
                <SkContent>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </SkContent>
            </SkillsLayout>
        )
    }
}

const SkillsLayout = styled.div`
    grid-area: skills;
    height: 100%;
    width: auto;
    padding:5%;

    @media (max-width: 768px){
        padding: 1rem;
    }
`;

const SkTitle = styled.div`
    text-align: center;
    font-size: 2.4rem;
`

const SkContent = styled.div`
    text-align:center;
    padding: 5%;

    @media (max-width: 768px){
        display: inline-block;
        margin-top: 0;
        margin-right: 0;
        width: auto;
        padding: 1rem;
    }
`

export default Skills;
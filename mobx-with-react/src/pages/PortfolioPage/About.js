import React, { Component } from "react";
import styled from "styled-components";

class About extends Component{
    render(){
        return(
            <AboutLayout>
                <AbTitle>About ME</AbTitle>
                <AbContent>
                Lorem ipsum dolor sit amet, ea unum dicunt invenire vim, audiam dolorum intellegat eu quo, sea eleifend senserit torquatos ad. Ea quando nostrum lucilius cum, est everti diceret ne, nam soluta fuisset ex. Per magna expetendis eu, nam sint legere adversarium ei. In est dicant complectitur, ne mea dolorum imperdiet. Quo amet minimum cu, euismod suscipiantur usu ei, ad mea nulla saperet mediocrem. In omnis tractatos iracundia mei, omittam phaedrum mei te. Duo eu habeo blandit volutpat, duo invenire atomorum intellegat ad.
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

    @media (max-width: 768px){
        display: inline-block;
        width: auto;
        padding: 1%;
    }
`;

const AbTitle = styled.div`
    position: relative;
    text-align: center;
    font-size: 2.4rem;
    margin-left: 6vw;
    margin-right: 12vw;
    width: 25vw;
    box-sizing: border-box;
    align-self: center;

    @media (max-width: 768px){
        width: auto;
    }
`

const AbContent = styled.div`
    max-width: 100%;
    margin-bottom: 4rem;
    margin-top: 4rem;
    padding: 1rem;
    margin-right: 8vw;

    @media (max-width: 768px){
        display: inline-block;
        margin-top: 0;
        margin-right: 0;
        width: auto;
        padding: 1rem;
    }
`

export default About;
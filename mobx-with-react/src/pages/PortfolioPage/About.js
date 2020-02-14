import React, { Component } from "react";
import styled from "styled-components";
import {Edit} from 'styled-icons/boxicons-regular/Edit';

import { inject, observer } from "mobx-react";

@inject('portfolioStore')
@observer
class About extends Component{
    constructor(props){
        super(props);

        this.state={
            isEdit: false,
            about: ""
        };

        this.handleChange=this.handleChange.bind(this);
    }
    handleChange=e=>{
        const nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);
    }

    render(){
        const handleClick=()=>{
            if(this.state.isEdit) {
                
                this.props.portfolioStore.setAbout(this.state.about);
                 this.setState({
                    about: this.props.portfolioStore.values.about
                 });
            } 
            const { isEdit } = this.state;
            this.setState({
                isEdit: !isEdit
            });
       };
       
        const commonView=(
            <AboutLayout>
                <AbTitle>About ME<EditP onClick={handleClick}/></AbTitle>
                <AbContent>{this.props.portfolioStore.values.about}</AbContent>
            </AboutLayout>
        );

        const editView=(
            <AboutLayout>
                <AbTitle>About ME<EditP onClick={handleClick}/></AbTitle>           
                <Input style={{ whiteSpace: 'pre-wrap' }} type="text" name="about" value={this.state.about} onChange={this.handleChange}></Input>
            </AboutLayout>
        );
        
        return(
            <div>
                {this.state.isEdit? editView:commonView}
            </div>
        )
    }
}

export const EditP = styled(Edit)`
    color: #DCDCDC;
    width: 1rem;
    height: 1rem;
    margin-bottom: 2.4rem;
    cursor: point;
`

// export const Input = styled.textarea`
//     /* outline: none;
//     border: none;
//     height: 100%; */
//     margin-top: 1rem;
//     width: 100%;
//     border: none;
//     outline: none;
//     font-size: 1rem;
//     border: 1px solid #e9ecef;
//     border-radius: 4px;
//     resize: none;
//     color: #212529;
//     display: block;
//     line-height: 1.5;
//     height: 10rem;
// `

const Input = styled.textarea`
    /* white-space: pre-wrap; */
    margin-top: 1rem;
    width: 80%;
    border: none;
    outline: none;
    font-size: 1rem;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    resize: none;
    color: #212529;
    display: block;
    line-height: 1.5;
    height: 10rem;
`;

const AboutLayout = styled.div`
    grid-area: about;
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-areas: 'atitle acontent';
    height: 100%;
    width: 100%;

    @media (max-width: 768px){
        display: inline-block;
        width: auto;
        padding: 1%;
    }
`;

const AbTitle = styled.div`
    text-align: center;
    font-size: 2.4rem;
    margin-left: 6vw;
    margin-right: 12vw;
    box-sizing: border-box;
    align-self: center;

    @media (max-width: 768px){
        width: auto;
    }
`

const AbContent = styled.div`
    grid-area: 'acontent';
    padding-right: 2%;
    width: 50rem;
    max-height: 30rem;
    overflow: hidden;

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
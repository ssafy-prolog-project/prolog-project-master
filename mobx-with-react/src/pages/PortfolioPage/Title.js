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

@inject("userStore", "authStore","portfolioStore")
@observer
class Title extends Component{
    constructor(props){
        super(props);

        this.state={
            isEdit: false,
            title: ""
        };

        this.handleChange=this.handleChange.bind(this);
    }
    handleChange=e=>{
        const nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);
    }

    render(){
        const {values} = this.props.authStore;
        const{accessToken,provider, id, name, profileimg} = values;
        
        const handleClick=()=>{
            if(this.state.isEdit) {
                
                this.props.portfolioStore.setTitle(this.state.title);
                 this.setState({
                    about: this.props.portfolioStore.values.title
                 });
            } 
            const { isEdit } = this.state;
            this.setState({
                isEdit: !isEdit
            });
       };

       const commonView=(
            <TitleLayout>
            <Link to={"/"} style={{ textDecoration: "none" }}>
                <MLogo>ProLog;</MLogo>
            </Link>
            <DIV>
                <PorTitle>{this.props.portfolioStore.values.title}<EditP onClick={handleClick}/></PorTitle>
            </DIV>
            </TitleLayout>
        );

        const editView=(
            <TitleLayout>
            <Link to={"/"} style={{ textDecoration: "none" }}>
                <MLogo>ProLog;</MLogo>
            </Link>
            <DIV>
                <PorTitle>
                <Input type="text" name="title" value={this.state.title} onChange={this.handleChange}></Input>
                <EditP onClick={handleClick}/></PorTitle>
            </DIV>
            </TitleLayout>
        )

        return(
            <div>
                {this.state.isEdit? editView:commonView}
            </div>
        )
    }
}

const Input = styled.input`
    margin-top: 1rem;
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    border: 1px solid #e9ecef;
    color: #212529;
    display: block;
    line-height: 1.5;
    font-size: 2.4rem;
`;

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
import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { EditP } from "../../styles/iconStyle.js";

@inject("userStore", "authStore", "portfolioStore")
@observer
class Contact extends Component{
    constructor(props){
        super(props);

        this.state={
            isEdit: false,
            email: ""
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
        const{accessToken,provider, id, name, email, profileimg} = values;

        const handleClick=()=>{
            if(this.state.isEdit) {
                
                this.props.portfolioStore.setEmail(this.state.email);
                 this.setState({
                    about: this.props.portfolioStore.values.email
                 });
            } 
            const { isEdit } = this.state;
            this.setState({
                isEdit: !isEdit
            });
       };

       const commonView=(
        <ContactLayout>
            <ContTitle>Contact<EditP onClick={handleClick}/></ContTitle>
            <Info>Email : {this.props.portfolioStore.values.email}</Info>
        </ContactLayout>
       )

       const editView=(
        <ContactLayout>
            <ContTitle>Contact<EditP onClick={handleClick}/></ContTitle>
            <Info>Email : <Input type="text" name="email" value={this.state.email} onChange={this.handleChange}></Input></Info>
        </ContactLayout>
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
    width: 20rem;
    border: none;
    outline: none;
    font-size: 1.5rem;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    color: #212529;
    line-height: 1.5;
    height: 3rem;
`;

const ContactLayout = styled.div`
    grid-area: contact;
    height: 50vh;
    width: 100%;
`

const ContTitle = styled.div`
    text-align: center;
    font-size: 2.4rem;
    font-weight: 400;
    margin: 30px 0;
`

const Info = styled.div`
    text-align: center;
    font-size: 1.9em;
    font-weight: 500;
`;

export default Contact;
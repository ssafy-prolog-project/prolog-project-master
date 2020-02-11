import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react"

@inject("userStore", "authStore")
@observer
class Contact extends Component{
    render(){
        const {values} = this.props.authStore;
        const{accessToken,provider, id, name, email, profileimg} = values;

        return(
            <ContactLayout>
                <ContTitle>Contact</ContTitle>
                <Info>Email : {email}</Info>
            </ContactLayout>
        )
    }
}

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
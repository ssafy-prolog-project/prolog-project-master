import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';
import dotenv from 'dotenv';

require('dotenv').config()

class GLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
    // Google Login
    responseGoogle = (res) => {
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            provider: 'google'
        });
        console.log(this.state.name);
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    render() {
        return (
            <Container>
                <Google
                    clientId={process.env.REACT_APP_Google}
                    buttonText="Google 로그인"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                    icon={false}
                />
            </Container>
        );
    }
}

export const Google = styled(GoogleLogin)`
    height: 100% !important;
    box-shadow: none !important;
    color: white !important;
    background-color: #00ff0000 !important;
`

const Container = styled.div`
    line-height: 4rem;
    width: 30rem;
    height: 4rem;
    background-color: #b32d00;
    display: inline-block;
    margin-top: 3rem;
    color: white;
    cursor: pointer;
`


export default GLogin;

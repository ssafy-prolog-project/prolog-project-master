import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';
import axios from 'axios';

require('dotenv').config();

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
            provider: 'google',
        });
        console.log('login success')
        // console.log(res.accessToken)
        axios.post('http://localhost:3000/login',{
            test: 1111
        }, { headers: {"Authorization" : `Bearer ${res.accessToken}`,
          "Content-Type":"application/json"}})
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        });
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
        console.log('FAILED')
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
    width: 100%;
    height: 4rem;
    background-color: #b32d00;
    display: inline-block;
    margin-top: 3rem;
    cursor: pointer;
`


export default GLogin;

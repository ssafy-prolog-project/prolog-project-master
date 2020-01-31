import React, { Component } from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';

require('dotenv').config();

class KLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
    // Kakao Login
    responseKakao = (res) => {
        this.setState({
            id: res.profile.id,
            name: res.profile.properties.nickname,
            provider: 'kakao',
        })
        console.log('succeess');
        // console.log(res.response.access_token)
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    render() {
        return (
            <Container>
                <Kakao
                    jsKey={process.env.REACT_APP_KAKAO}
                    buttonText="Kakao 로그인"
                    onSuccess={this.responseKakao}
                    onFailure={this.responseFail}
                    getProfile="true"
                />
            </Container>
        );
    }
}

export const Kakao = styled(KakaoLogin)`
    height: 100% !important;
    border: 0 !important;
    outline: 0 !important;
    box-shadow: none !important;
    color: black !important;
    background-color: #00ff0000 !important;
`

const Container = styled.div`
    line-height: 4rem;
    width: 100%;
    height: 4rem;
    background-color: #ffff00;
    display: inline-block;
    margin-top: 3rem;
    color: white;
    cursor: pointer;
`

export default KLogin;

import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GitHubLogin from 'react-github-login';

import { inject, observer } from "mobx-react";

require('dotenv').config();

@inject('authStore')
@observer
class GHLogin extends Component{
    constructor(props) {
        super(props);
        this.state = {
          id: "",
          name: "",
          provider: ""
        };
      }

      onSuccess = res => {
        console.log("깃허브 login success");
        console.log(res)
        this.props.authStore.setAccessToken(res.code);
        this.props.authStore.setProvider("github");
        this.props.authStore.login().then(() => {
            console.log("우리 서비스 로그인 성공")
            // 현재는 cors 에러 나서 실패했는데도 로그인 성공으로 찍어버림.
        }).catch((err)=>{
            console.log("실패", err)
        })
    }
    onFailure = res => {
        console.log('err')
        console.error(res)};

    render(){
        return(
            <Container>
                <Github
                    clientId={process.env.REACT_APP_GITHUB}
                    redirectUri=""
                    buttonText="Github 로그인"
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                />
            </Container>
        )
    }
}

export const Github = styled(GitHubLogin)`
    height: 100% !important;
    color: black !important;
    border: 0;
    outline: 0;
    box-shadow: none !important;
    background-color: #00ff0000 !important;
`

const Container = styled.div`
    line-height: 4rem;
    width: 100%;
    height: 4rem;
    background-color: #e6e6e6;
    display: inline-block;
    margin-top: 3rem;
    color: white;
    cursor: pointer;
`

export default GHLogin;
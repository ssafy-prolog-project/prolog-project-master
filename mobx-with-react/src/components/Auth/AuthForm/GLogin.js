import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import axios from "axios";

import { inject, observer } from "mobx-react";

require("dotenv").config();

@inject("authStore")
@observer
class GLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: ""
    };
  }
  // Google Login
  responseGoogle = res => {
    this.setState({
      id: res.googleId,
      name: res.profileObj.name,
      provider: "google"
    });
    console.log("구글 login success");
    console.log(res);
    this.props.authStore.setAccessToken(res.accessToken);
    this.props.authStore.setProvider("google");
    this.props.authStore.login().then(() => {
        console.log("우리 서비스 로그인 성공")
        // 현재는 cors 에러 나서 실패했는데도 로그인 성공으로 찍어버림.
    }).catch((err)=>{
        console.log("실패", err)
    })
  };

  // Login Fail
  responseFail = err => {
    console.error(err);
    console.log("FAILED");
  };

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
`;

const Container = styled.div`
  line-height: 4rem;
  width: 100%;
  height: 4rem;
  background-color: #b32d00;
  display: inline-block;
  margin-top: 3rem;
  cursor: pointer;
`;

export default GLogin;

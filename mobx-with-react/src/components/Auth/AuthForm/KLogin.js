import React, { Component } from "react";
import KakaoLogin from "react-kakao-login";
import styled from "styled-components";

import { inject, observer } from "mobx-react";
require("dotenv").config();

@inject('authStore')
@observer
class KLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: ""
    };
  }
  // Kakao Login
  responseKakao = res => {
    this.setState({
      id: res.profile.id,
      name: res.profile.properties.nickname,
      provider: "kakao"
    });

    console.log("카카오 login success");
    console.log(res)
    this.props.authStore.setAccessToken(res.response.access_token);
    this.props.authStore.setProvider("kakao");
    this.props.authStore
      .login()
      .then(() => {
        console.log("우리 서비스 로그인 성공");
        // 현재는 cors 에러 나서 실패했는데도 로그인 성공으로 찍어버림.
      })
      .catch(err => {
        console.log("실패", err);
      });
  };

  // Login Fail
  responseFail = err => {
    console.error(err);
  };

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
  cursor: pointer;
`;

const Container = styled.div`
  line-height: 4rem;
  width: 100%;
  height: 4rem;
  background-color: #ffff00;
  display: inline-block;
  margin-top: 3rem;
  cursor: pointer;
`;

export default KLogin;

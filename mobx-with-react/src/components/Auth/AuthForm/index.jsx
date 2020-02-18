import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

import GLogin from "./GLogin";
import GHLogin from "./GHLogin";
import KLogin from "./KLogin";

@inject("authStore")
@withRouter
@observer
class AuthForm extends React.Component {
    componentWillUnmount() {
        this.props.authStore.reset();
      }

      handleSubmitForm = e => {
        e.preventDefault();
        this.props.authStore.login()
        .then(() => 
        this.props.history.push('/'),
        window.location.reload()
        );
      };

  render() {
    const { values, inProgress } = this.props.authStore;
    const { accessToken, refreshToken, provider} = values;
    console.log(accessToken, refreshToken, provider)
    console.log('inprogress', inProgress)
    return (
      <LineBox>
        <GHLogin>Github 로그인</GHLogin>
        <GLogin></GLogin>
        <KLogin></KLogin>
        <hr />
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Guest>로그인 하지 않고 둘러보기</Guest>
        </Link>
      </LineBox>
    );
  }
}

const LineBox = styled.div`
  padding-left: 7%;
  padding-right: 7%;
  margin-top: 25%;
  width: 50%;
  height: 27rem;
  display: inline-block;
  background-color: white;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 20% !important;
  }
  @media (max-width: 1024px) {
    margin-top: 5%;
  }
`;

const Guest = styled.div`
  float: right;
  margin-top: 3%;
  margin-right: 1rem;
  cursor: pointer;
`;

export default AuthForm;

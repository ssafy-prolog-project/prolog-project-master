import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from "styled-components";
import { Link } from "react-router-dom";

import GLogin from './GLogin';
import GHLogin from './GHLogin';
import KLogin from './KLogin';

const LogInPage = () => {
 
  return (
    <LoginLayout>
      <LeftDiv>
        <Logo>Prolog;</Logo>
        <TextBox>
          개발자들은 대체 글을 어디서 써야 할까....?
          <br />
          마크다운, 코드 하이라이팅 등... 개발자들의 취향저격하는 글쓰기
          플랫폼이 바로 여기에, 고민하지 말고 지금 시작하자.
        </TextBox>
      </LeftDiv>
      <RightDiv>
        <LineBox>
          <GHLogin>Github 로그인</GHLogin>
          <GLogin></GLogin>
          <KLogin></KLogin>
          <hr />
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Guest>로그인 하지 않고 둘러보기</Guest>
          </Link>
        </LineBox>
      </RightDiv>
    </LoginLayout>
  );
};

const LoginLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "nav content";

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 100% !important;
    grid-template-rows: 100% !important;
    grid-template-areas: "content";
  }

  @media (max-width: 1024px){
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% 70%;
    grid-template-areas: "nav"
                          "content";
  }
`;

const LeftDiv = styled.div`
  /* width: 50vw; */
  height: 100%;
  background-color: #1a3365;
  float: left;
  @media (max-width: 768px) {
      display: none;
  }
  @media (max-width: 1024px){
    /* display: none; */
    height: 100%;
  }
`;

const Logo = styled.div`
  padding: 0 2rem;
  margin-top: 30%;
  margin-left: 5%;
  margin-bottom: 1.75rem;
  font-size: 2rem;
  line-height: 2rem;
  font-family: Inconsolata;
  color: white;
  display: block;
  position: relative;

  @media (max-width: 1024px){
    margin-top: 3rem;
  }
`;

const TextBox = styled.div`
  color: white;
  width: 70%;
  height: 20rem;
  margin-right: 15%;
  margin-left: 13%;
  font-size: 1.3rem;

  
  
`;

const RightDiv = styled.div`
  height: 100%;
  background-color: #ebf0fa;
  float: left;
  text-align: center;

  @media (max-width: 768px) {
       width: 100vw;
       height: 100%;
  }

  @media (max-width: 1024px){
       width: 100vw;
       height: 100%;
  }
`;

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
  @media (max-width: 1024px){
    margin-top: 5%;
  }
`;

const GithubLoginForm = styled.div`
  line-height: 4rem;
  width: 100%;
  height: 4rem;
  background-color: #e6e6e6;
  display: inline-block;
  margin-top: 3rem;
  cursor: pointer;
`;

const FacebookLoginForm = styled.div`
  line-height: 4rem;
  width: 100%;
  height: 4rem;
  background-color: #0066cc;
  display: inline-block;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: white;
  cursor: pointer;
`;

const Guest = styled.div`
  float: right;
  margin-top: 3%;
  margin-right: 1rem;
  cursor: pointer;
`;
export default LogInPage;
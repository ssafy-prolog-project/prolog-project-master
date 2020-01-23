import React from "react";
import styled from "styled-components";

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
          <GithubLoginForm>Github 로그인</GithubLoginForm>
          <GoogleLoginForm>Google 로그인</GoogleLoginForm>
          <FacebookLoginForm>Facebook 로그인</FacebookLoginForm>
          <hr />
          <Guest>로그인 하지 않고 둘러보기</Guest>
        </LineBox>
      </RightDiv>
    </LoginLayout>
  );
};

const LoginLayout = styled.div``;

const LeftDiv = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #1a3365;
  float: left;
`;

const Logo = styled.div`
  padding: 0 2rem;
  margin-top: 20rem;
  margin-left: 4rem;
  margin-bottom: 1.75rem;
  font-size: 2rem;
  line-height: 2rem;
  font-family: Inconsolata;
  color: white;
  display: block;
  position: relative;
`;

const TextBox = styled.div`
  color: white;
  width: 30rem;
  height: 20rem;
  margin-left: 6rem;
  font-size: 1.3rem;
`;
const RightDiv = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #ebf0fa;
  float: left;
  text-align: center;
`;

const LineBox = styled.div`
  margin-top: 15rem;
  width: 40rem;
  height: 30rem;
  display: inline-block;
  background-color: white;
  text-align: center;
`;

const GithubLoginForm = styled.div`
    
  width: 30rem;
  height: 4rem;
  background-color: #e6e6e6;
  display: inline-block;
  margin-top: 3rem;
  cursor: pointer;
`;

const GoogleLoginForm = styled.div`
  width: 30rem;
  height: 4rem;
  background-color: #b32d00;
  display: inline-block;
  margin-top: 3rem;
  color: white;
  cursor: pointer;
`;

const FacebookLoginForm = styled.div`
  width: 30rem;
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
  margin-right: 1rem;
  cursor: pointer;
`;
export default LogInPage;

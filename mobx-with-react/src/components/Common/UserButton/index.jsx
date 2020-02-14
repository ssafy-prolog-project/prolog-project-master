import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LoginButton from "../LoginButton";

@inject("userStore", "authStore")
@observer
// 누르면 버튼으로 할 수 있는 동작 구현
class UserButton extends Component {
  render() {
    const { picture, name, email } = this.props.authStore.user_info;
    const check = this.props.authStore.token;
    const Logout = () => {
      this.props.authStore.setAccessToken(undefined);
      this.props.authStore.setProfileimg(undefined);
      this.props.authStore.setId(undefined);
      this.props.authStore.setName(undefined);
      this.props.authStore.setEmail("이메일을 입력해주세요.");
      this.props.authStore.setIntro("소개를 입력해주세요.");
      this.props.authStore.setProvider(undefined);
    };
    return (
      <Img>
        {check ? (
          <>
            <ProfileImg src={picture}></ProfileImg>
            <SelectMenus className="menubar">
              <Link to={"/write"} style={{ textDecoration: "none" }}>
                <SelectMenu>Post</SelectMenu>
              </Link>
              <Link to={"/portfolio"} style={{ textDecoration: "none" }}>
                <SelectMenu>Portfolio</SelectMenu>
              </Link>
              <Link to={"/mypage"} style={{ textDecoration: "none" }}>
                <SelectMenu>MyPage</SelectMenu>
              </Link>
              <SelectMenu onClick={Logout}>Logout</SelectMenu>
            </SelectMenus>
          </>
        ) : (
          <LINKS to={"/login"} style={{ textDecoration: "none" }}>
            <LoginButton></LoginButton>
          </LINKS>
        )}
      </Img>
    );
  }
}
const SelectMenus = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &:hover .menubar {
    display: block;
  }
  margin-right: 3rem;
  margin-top: 3rem;
  @media (max-width: 768px) {
    left: -3rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    left: -3rem;
  }
  /*display: none;
  margin-top: -1rem;
  float: right;
  margin-right: 3rem;
   position: absolute; */
  /*background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 3;*/
`;
const SelectMenu = styled.a`
  color: black;
  padding: 10px 12px;
  text-decoration: none;
  display: block;
  text-align: left;

  /* position: absolute; */
  /* color: black;
  padding: 10px 12px;
  display: block;
  text-align: left;
  position: absolute; */
  cursor: pointer;
  :hover {
    background-color: #b0b0b0;
  }
`;
const Img = styled.div`
  position: relative;
  display: inline-block;
  grid-area: test;

  padding-top: 1rem;
  margin-left: 85%;
  &:hover .menubar {
    display: block;
  }
  @media (max-width: 768px) {
    padding-left: 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-left: 10%;
  }
`;

const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  margin-right: 5%;
  z-index: 2;
  &:hover .menubar {
    display: block;
  }
  @media (max-width: 768px) {
    margin-right: 10%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: -10rem;
  }
`;

export const LINKS = styled(Link)``;



export default UserButton;

import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("userStore", "authStore")
@observer
// 누르면 버튼으로 할 수 있는 동작 구현
class UserButton extends Component {
  render() {
    const { values } = this.props.authStore;
    const { accessToken, provider, id, name, profileimg } = values;

    return (
      <Img>
        {profileimg ? (
            <>
          <ProfileImg src={profileimg}></ProfileImg>
          <SelectMenus className="a">
            <Link to={"/write"} style={{ textDecoration: "none" }}>
            <SelectMenu>Post</SelectMenu>
            </Link>
            <Link to={"/portfolio"} style={{ textDecoration: "none" }}>
               <SelectMenu>Portfolio</SelectMenu>
               </Link>
               <Link to={"/mypage"} style={{ textDecoration: "none" }}>
               <SelectMenu>MyPage</SelectMenu>
          </Link>
          </SelectMenus>
          </>
        ) : (
          //           <SelectMenus className="a">
          //     <Link to={"/write"} style={{ textDecoration: "none" }}>
          //       <SelectMenu>Post</SelectMenu>
          //     </Link>
          //     <Link to={"/portfolio"} style={{ textDecoration: "none" }}>
          //     <SelectMenu>Portfolio</SelectMenu>
          //     </Link>
          //   </SelectMenus>
          <LINKS to={"/login"} style={{ textDecoration: "none" }}>
            <LoginButton>로그인</LoginButton>
          </LINKS>
        )}
      </Img>
    );
  }
}
const SelectMenus = styled.div`
  display: none;
  margin-top: 2rem;
  float: right;
  margin-right: 3rem;
  /* position: absolute; */
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 5;
`;
const SelectMenu = styled.a`
  color: black;
  padding: 10px 12px;
  display: block;
  text-align: left;
  position: absolute;
  cursor: pointer;
  :hover {
    background-color: #f1f1f1
  }
`;
const Img = styled.div`
  grid-area: test;
  display: inline-block;
  padding-top: 1rem;
  margin-left: 85%;
  &:hover .a {
    display: block;
  }
  @media (max-width: 768px) {
    padding-left: 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-left: 60%;
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
  &:hover .a {
    display: block;
  }
  @media (max-width: 768px) {
    margin-right: 10%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-right: 30%;
  }
`;

const LoginButton = styled.div`
  border-style: solid;
  width: 5rem;
  height: 2rem;
  float: right;
  margin-right: 5%;
`;

export const LINKS = styled(Link)``;

const Sample = styled.img`
  /* grid-area: test; */
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  font-family: Inconsolata;
`;

export default UserButton;

import React, { useState, useEffect } from 'react';
import ProfileBtn from "./ProfileBtn";
import Write from "./Write";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchAlt2 } from "styled-icons/boxicons-regular/SearchAlt2";
import { signIn } from '../Auth/auth';
import AuthRoute from '../Auth/AuthRoute';
import LoginBtn from './LoginBtn';

export const MSearchIcon = styled(SearchAlt2)`
  width: 20%;
  height: 35px;
  cursor: pointer;
  float: left;
  text-align: center;
  display: none;
  color: black;
  padding-top: 1.2rem;
  @media (max-width: 768px) {
    display: block;
  }
`;


const TopBar = () => {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);
  return (
    <TopBarLayout>
     


      <Link to={"/searchpage"} style={{ textDecoration: "none" }}>
        <MSearchIcon ></MSearchIcon>
      </Link>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <MLogo>Prolog;</MLogo>
      </Link>

      {authenticated ? (
        <>
          <ProfileBtn></ProfileBtn>
          <Write></Write>
          </>
        ) : (
          <LoginBtn></LoginBtn>
        )} 

      
      
    </TopBarLayout>
  );
};

const TopBarLayout = styled.div`
  background-color: white;
  color: white;
  align-items: flex-end;
  width: 100%;
  text-align: center;
  /* will be layout css code  */
`;

const MLogo = styled.div`
  display: none;
  text-align: center;
  cursor: pointer;
  color: black;
  font-size: 2rem;
    line-height: 2rem;
    font-family: Inconsolata;
    padding-top: 1rem;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;



export default TopBar;
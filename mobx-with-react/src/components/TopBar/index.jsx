import React, { useState, useEffect } from "react";
import ProfileBtn from "./ProfileBtn";
import Write from "./Write";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchAlt2 } from "styled-icons/boxicons-regular/SearchAlt2";
import { signIn } from "../Auth/auth";
import AuthRoute from "../Auth/AuthRoute";
import UserButton from "../Common/UserButton"

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
  const [user, setUser] = useState('10');
  const authenticated = user != null;

  const login = ({ email, password }) => setUser({ email: 'kim@test.com', password: '123', name: 'Kim' });
  // signIn({ email, password })
  const logout = () => setUser(null);
  return (
    <TopBarLayout>
    
        <UserButton></UserButton>
        
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

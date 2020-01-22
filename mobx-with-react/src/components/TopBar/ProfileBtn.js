import React from 'react';
import styled from 'styled-components';
import {Profile} from 'styled-icons/icomoon/Profile';
import { Link } from 'react-router-dom';

export const ProfileIcon = styled(Profile)`
    width: 40px;
    float: right;
    cursor: pointer;
    padding-top: .7rem;
    padding-right: 1rem;
    color: black;
    :hover{
    opacity: 0.5;
  }
`;

const ProfileBtn = () => {
    const ProfileClick = () => {
        alert("프로필을 눌렀어요!");
    };
    return (
        <Link to={"/mypage"} style={{ textDecoration: "none" }}>
            <ProfileIcon onClick={ProfileClick}></ProfileIcon>
        </Link>
    );
};


export default ProfileBtn;
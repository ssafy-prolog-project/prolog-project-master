import React from 'react';
import styled from 'styled-components';
import {Profile} from 'styled-icons/icomoon/Profile';

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
        <ProfileIcon onClick={ProfileClick}></ProfileIcon>
    );
};


export default ProfileBtn;
import React from 'react';
import styled from 'styled-components';
import {Profile} from 'styled-icons/icomoon/Profile';

export const ProfileIcon = styled(Profile)`
    width: 40px;
    float: right;
    cursor: pointer;
    padding-top: 10px;
    padding-right: 5px;
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
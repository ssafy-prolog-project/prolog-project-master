import React from 'react';
import styled from 'styled-components';

const Profile = () => {
    const ProfileClick = () => {
        alert("프로필을 눌렀어요!");
    };
    return (
        <ProfileLayout onClick={ProfileClick}></ProfileLayout>
    );
};

const ProfileLayout = styled.div`
/*프로필 들어갈 곳! 나중에 수정*/
    margin-right: 1%;
    border-radius: 50px;
    border-color: #00aec9;
    border-style: solid;
    width: 60px;
    height: 90%;
    background-color: #00aec9;
    float: right;
    cursor: pointer;
`;

export default Profile;
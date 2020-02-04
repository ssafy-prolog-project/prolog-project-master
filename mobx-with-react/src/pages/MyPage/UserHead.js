import React, {Component} from 'react';
import styled from "styled-components";
import UserInfo from "./UserInfo";

class UserHead extends Component{
    render(){
        return(
            <UserHeadLayout>
                <Img></Img>
                <UserInfo>user info~</UserInfo>
            </UserHeadLayout>
        )
    }
}


const UserHeadLayout = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Img = styled.div`
    display: flex;
    background-color: pink;
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 50%;
`;

export default UserHead;
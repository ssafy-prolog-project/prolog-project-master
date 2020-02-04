import React, {Component} from "react";
import styled from "styled-components";

class UserInfo extends Component{
    render(){
        return(
            <UserInfoLayout>
                <UserName>아이디요~</UserName>
                <ProfileContent>프로필 정보요~</ProfileContent>
            </UserInfoLayout>
        )
    }
}

const UserInfoLayout = styled.div`
    flex-direction: column;
    margin-left: 2rem;
    width: 100%;
   
`
const UserName = styled.div`
    padding-top: 10%;
`

const ProfileContent = styled.div`
    padding-top: 0.5rem;
`

export default UserInfo;
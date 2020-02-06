import React, {Component} from "react";
import styled from "styled-components";

class UserInfo extends Component{
    render(){
        return(
            <UserInfoLayout>
                <UserName>아이디요~</UserName>
                <ProfileContent>
                    <h2>이름이요~~~~~</h2>
                </ProfileContent>
            </UserInfoLayout>
        )
    }
}

const UserInfoLayout = styled.div`
    flex-direction: column;
    margin-left: 2rem;
    width: 100%-2rem;
    height: 100%-2rem;
`
const UserName = styled.div`
    padding-top: 3%;
`

const ProfileContent = styled.div`
    padding-top: 0.5rem;
`

export default UserInfo;
import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

@inject("userStore")
@observer
class UserProfile extends Component {
  state = {
    myuserinfo: []
  };

//   componentDidMount() {
//     const { userInfo } = this.props.userStore;

//     this.setState({
//       myuserinfo: userInfo
//     });
//   }
  render() {
    const { userInfo } = this.props.userStore;
    const { profileImg, userId, userName } = userInfo;
    console.log(userInfo);
    return (
      <UserProfileLayout>
        <Img>
          {profileImg ? (
            <ProfileImg src={profileImg}></ProfileImg>
          ) : (
            <DefaultImage></DefaultImage>
          )}
        </Img>
        <UserInfo>
          <UserId>{userId}</UserId>
          <UserName>{userName}</UserName>
        </UserInfo>
      </UserProfileLayout>
    );
  }
}

// const UserProfile = () => {

//     return(
//         <UserProfileLayout>
//             <ProfileImg></ProfileImg>
//             <UserInfo>
//                 <UserId>User ID</UserId>
//                 <UserName>UserName</UserName>
//             </UserInfo>
//         </UserProfileLayout>
//     )
// }

const Img = styled.div``;

const UserProfileLayout = styled.div`
  display: flex;
  height: 50%;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    display: grid;
    flex-direction: column;
    justify-content: center;
  }
`;

const ProfileImg = styled.img`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
`;

const DefaultImage = styled.div`
  display: flex;
  background-color: ivory;
  justify-content: center;
  text-align: center;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  flex-direction: column;
  margin-left: 2rem;
  width: 100%-2rem;
  height: 100%-2rem;
`;

const UserId = styled.div`
  padding-top: 3%;
`;

const UserName = styled.div`
  padding-top: 0.5rem;
`;

export default UserProfile;

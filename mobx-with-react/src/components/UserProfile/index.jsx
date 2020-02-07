import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { Link } from 'react-router-dom';
import KakaoLogin from "react-kakao-login";
require("dotenv").config();

//@inject("userStore", "authStore")
@observer
class UserProfile extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: "",
  //     name: "",
  //     provider: ""
  //   };
  // }
  // responseKakao = res => {
  //   this.setState({
  //     id: res.profile.id,
  //     name: res.profile.properties.nickname,
  //     provider: "kakao"
  //   });

  //   console.log("여기야여기!!!!!!!!!!!!!!!!!!!!!!!!!");
  //   console.log(res)
    
  // };
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
        <Link to={"/mypage"} style={{textDecoration:"none"}}>
        <Img>
          {profileImg ? (
            <ProfileImg src={profileImg}></ProfileImg>
          ) : (
            <DefaultImage></DefaultImage>
          )}
        </Img>
        </Link>
        <UserInfo>
          <UserName>{userName}</UserName>
          <UserId>{userId}</UserId>
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

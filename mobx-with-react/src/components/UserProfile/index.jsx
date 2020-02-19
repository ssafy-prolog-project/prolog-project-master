import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Pencil } from "styled-icons/boxicons-regular/Pencil";
import {Github} from "styled-icons/boxicons-logos/Github";
import agent from "../../agent"

require("dotenv").config();

export const PencilIncon = styled(Pencil)`
  width: 1rem;
  cursor: pointer;
  float: rigth;
  opacity: 50%;
`;

export const GithubIcon = styled(Github)`
width: 2rem;
  cursor: pointer;
  float: left;
  padding-top: 0.5rem;
`;

@inject("userStore", "authStore")
@observer
class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditName: false,
      isEditEmail: false,
      isEditIntro: false,
      profileimg: "",
      name: "",
      email: "",
      intro: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.NameClick = this.NameClick.bind(this);
    this.EmailClick = this.EmailClick.bind(this);
    // this.getStateOrStroeName = this.getStateOrStroeName(this);
  }

  componentDidMount() {
    agent.Auth.getUserInfo(this.props.authStore.token).then(
      res => {
        this.props.authStore.setName(res.data.data.name);
        this.props.authStore.setEmail(res.data.data.email);
        this.props.authStore.setIntro(res.data.data.greeting);
      }
    )
  }

  handleChange = e => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  NameClick = () => {
    if (!this.state.isNameEdit) {
      this.props.authStore.setName(this.state.name);
      this.props.authStore.updateName(this.state.name);
    }
    
<<<<<<< HEAD
    const { picture, name, email, greeting } = this.props.authStore.user_info;
    
    const NameClick = () => {
      if (!this.state.isNameEdit) {
        this.props.authStore.setName(this.state.name);
        this.setState({
          name: this.props.authStore.values.name
        });
      }
      // else{
      //   this.setState({
      //     name: this.props.authStore.values.name
      //   });
      // }

      const { isEditName } = this.state;
      this.setState({
        isEditName: !isEditName
      });
    };
    const EmailClick = () => {
      if (!this.state.isEmailEdit) {
        this.props.authStore.setEmail(this.state.email);
        this.setState({
          email: this.props.authStore.values.email
        });
      }
=======
    const { isEditName } = this.state;
    this.setState({
      isEditName: !isEditName
    });
  };
>>>>>>> Feature-39-IK

  EmailClick = () => {
    if (!this.state.isEmailEdit) {
      this.props.authStore.setEmail(this.state.email);
      this.props.authStore.updateEmail(this.state.email);
    }

    const { isEditEmail } = this.state;
    this.setState({
      isEditEmail: !isEditEmail
    });
  };
  
  IntroClick = () => {
    if (!this.state.isIntroEdit) {
      this.props.authStore.setIntro(this.state.intro);
      this.props.authStore.updateIntro(this.state.intro);
    }

    const { isEditIntro } = this.state;
    this.setState({
      isEditIntro: !isEditIntro
    });
  };

  render() {
    const { picture } = this.props.authStore.user_info;
    const { name, email, greeting } = this.props.authStore.user_detail;

    const showname = (
      <UpdateName>
        <UserName>Name: {this.props.authStore.name}</UserName>
        <PencilIncon onClick={this.NameClick}></PencilIncon>
      </UpdateName>
    );

    const showemail = (
      <UpdateEmail>
        <UserEmail>Email: {this.props.authStore.email}</UserEmail>
        <PencilIncon onClick={this.EmailClick}></PencilIncon>
      </UpdateEmail>
    );

    const showintro = (
      <UpdateIntro>
      <UserIntro>Intro: {this.props.authStore.intro}</UserIntro>
      <PencilIncon onClick={this.IntroClick}></PencilIncon>
      </UpdateIntro>
    );

    const editname = (
      <UpdateName>
        Name:
        <InputName
          type="text"
          name="name"
          placeholder={name}
          value={this.state.name}
          onChange={this.handleChange}
        ></InputName>
        <PencilIncon onClick={this.NameClick}></PencilIncon>
      </UpdateName>
    );

    const editemail = (
      <UpdateEmail>
        Email:
        <InputEmail
          type="text"
          name="email"
          placeholder={email}
          value={this.state.email}
          onChange={this.handleChange}
        />
        <PencilIncon onClick={this.EmailClick}></PencilIncon>
      </UpdateEmail>
    );

    const editintro = (
      <UpdateIntro>
        Intro:
        <InputIntro
          type="text"
          name="intro"
          placeholder={greeting}
          value={this.state.intro}
          onChange={this.handleChange}
        />
        <PencilIncon onClick={this.IntroClick}></PencilIncon>
      </UpdateIntro>
    );

    const viewname = this.state.isEditName ? editname : showname;
    const viewemail = this.state.isEditEmail ? editemail : showemail;
    const viewintro = this.state.isEditIntro ? editintro : showintro;
    return (
      <UserProfileLayout>
        <Link to={"/mypage"} style={{ textDecoration: "none" }}>
          <Img>
            {picture ? (
              <ProfileImg
                src={picture}
              ></ProfileImg>
            ) : (
              <DefaultImage src="https://image.flaticon.com/icons/svg/747/747376.svg"></DefaultImage>
            )}
          </Img>
        </Link>
        <UserInfo>
          {viewname}
          {viewemail}
          {viewintro}
          {/* <GithubIcon></GithubIcon> */}
          {/*github, instgram...*/}
        </UserInfo>
      </UserProfileLayout>
    );
  }
}

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

const DefaultImage = styled.img`

display: flex;
  justify-content: center;
  text-align: center;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;


  /* display: flex;
  background-color: ivory;
  justify-content: center;
  text-align: center;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%; */
`;

const UserInfo = styled.div`
  /* flex-direction: column; */
  margin-left: 2rem;
  width: 100%-2rem;
  height: 100%-2rem;
`;

const UserName = styled.div`
  padding-top: 0.5rem;
  float: left;
  
`;

const UserEmail = styled.div`
  padding-top: 0.5rem;
  float: left;
`;

const UserIntro = styled.div`
  padding-top: 0.5rem;
  float: left;
`;
const UpdateName = styled.div`
padding-top: 0.5rem;
 display: flex;
 align-items: center;
`;
const UpdateEmail = styled.div`
  padding-top: 0.5rem;
  display: flex;
 align-items: center;
`;
const UpdateIntro = styled.div`
  padding-top: 0.5rem;
  display: flex;
 align-items: center;
`;

const InputName = styled.textarea`
resize: none;
height: 1rem;
margin-top:
`;

const InputEmail = styled.textarea`
padding-top: 0.5rem;
resize: none;
height: 1rem;
`;

const InputIntro = styled.textarea`
padding-top: 0.5rem;
resize: none;
height: 1rem;
`;

export default UserProfile;

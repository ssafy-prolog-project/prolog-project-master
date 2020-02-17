import { observable, action, computed, reaction, toJS } from "mobx";
import jwtDecode from 'jwt-decode';
import { getUnixTime } from "date-fns";

import agent from "../agent";
import UserStore from "./userStore";
import { Target } from "styled-icons/feather";


export default class AuthStore {
  @observable inProgress = false;
  @observable errors = undefined;
  @observable appName = "Prolog";
  @observable token = window.sessionStorage.getItem("jwt");
  @observable user_info = undefined;
  
  constructor(root) {
    this.root = root;
    if(this.token){
      this.user_info=jwtDecode(this.token).userInfo;
    }

    reaction(
      () => this.token,
      token => {
        if (token) {
          window.sessionStorage.setItem("jwt", token);
        } else {
          window.sessionStorage.removeItem("jwt");
        }
      }
    );
  }
  
  //sns accessToken 타입들이 어떻게 들어올까?
  @observable values = {
    accessToken: undefined,
    refreshToken: undefined,
    provider: undefined,
    email: "이메일을 입력해주세요.",
    id: undefined,
    name: "",
    profileimg: undefined,
    intro: "소개를 입력해주세요.",
    sub: "",
    role: "",
    picture:""
  };
  @action setProfileimg(profileimg) {
    this.values.profileimg = profileimg;
  }
  @action setId(id) {
    this.values.id = id;
  }
  @action setName(name) {
    this.values.name = name;
  }
  @action setAccessToken(token) {
    this.values.accessToken = token;
    //this.values.accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTU4MTU3ODQxMywiZXhwIjoxNTgxNTgyMDEzfQ.0wQwjm7G-FhM_WvZQ_to7uaaqckrKc7dK7dbCO_qWpo";
  }
  @action setRefreshToken(token) {
    this.values.refreshToken = token;
  }
  @action setEmail(email) {
    this.values.email = email;
  }
  @action setIntro(intro) {
    this.values.intro = intro;
  }
  @action setSub(sub){
    this.values.sub=sub;
  }
  @action setRole(role){
    this.values.role=role;
  }

  @action setToken(token){
    console.log("얘는 decode");
    this.token=token;
    this.user_info=jwtDecode(token).userInfo;
    console.log("안녕")
    //console.log(JSON.parse(JSON.stringify(this.user_info)));
    console.log(toJS(this.user_info));
  }

  @action setProvider(provider) {
    this.values.provider = provider;
    console.log("Store에서 넘어가기전!!!!");
    console.log(this.values);
  }

  @action reset() {
    this.values.accessToken = undefined;
    this.values.refreshToken = undefined;
  }

  @action login() {
    this.inProgress = true;
    this.errors = undefined;
    console.log("login중.....");
    return agent.Auth.login(
      this.values.accessToken,
      this.values.refreshToken,
      this.values.provider
    )
      .then(res => {
        console.log("로그인 중 확인확인"+res.data.data);
        this.setToken(res.data.data);
      })
      // .then(() => this.root.userStore.pullUser()) //login 성공한 유저정보를 불러온다.
      .catch(
        action(err => {
          console.log("err   " + err);
          this.errors =
            err.response && err.response.body && err.response.body.errors;
          throw err;
        })
      )
      .then(
        action(() => {
          this.inProgress = false;
        })
      );
  }

  @action register() {
    this.inProgress = true;
    this.errors = undefined;
    console.log("register중");
    return agent.Auth.register(
      this.values.accessToken,
      this.values.refreshToken
    )
      .then(({ user }) => this.setToken(user.token))
      .then(() => this.root.userStore.pullUser()) //login 성공한 유저정보를 불러온다.
      .catch(
        action(err => {
          this.errors =
            err.response && err.response.body && err.response.body.errors;
          throw err;
        })
      )
      .then(
        action(() => {
          this.inProgress = false;
        })
      );
  }

  @action logout() {
    window.sessionStorage.removeItem("jwt");
    window.location.reload();
  }
}

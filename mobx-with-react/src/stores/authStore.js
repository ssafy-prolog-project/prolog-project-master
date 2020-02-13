import { observable, action, computed } from "mobx";
import { getUnixTime } from "date-fns";

import agent from "../agent";
import CommonStore from "./commonStore";
import UserStore from "./userStore"


export default class AuthStore {
  constructor(root) {
    this.root = root;
  }
  @observable inProgress = false;
  @observable errors = undefined;

  //sns accessToken 타입들이 어떻게 들어올까?
  @observable values = {
    accessToken: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTU4MTU3ODQxMywiZXhwIjoxNTgxNTgyMDEzfQ.0wQwjm7G-FhM_WvZQ_to7uaaqckrKc7dK7dbCO_qWpo",
    // accessToken: undefined,
    provider : "kakap",
    email: "이메일을 입력해주세요.",
    msrl: 1,
    name: "경은",
    picture: "http://k.kakaocdn.net/dn/dHTLeA/btqBuhFFnC5/81KQjyt54LiQvu6MiIGl8k/img_640x640.jpg",
    greeting: "소개를 입력해주세요."
  };
  @action setProfileimg(profileimg) {
    this.values.picture = profileimg;
  }
  @action setId(id) {
    this.values.id = id;
  }
  @action setName(name) {
    this.values.name = name;
  }
  @action setAccessToken(token) {
    //this.values.accessToken = token;
    this.values.accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTU4MTU3ODQxMywiZXhwIjoxNTgxNTgyMDEzfQ.0wQwjm7G-FhM_WvZQ_to7uaaqckrKc7dK7dbCO_qWpo";
  }
  @action setEmail(email) {
    this.values.email = email;
  }
  @action setIntro(intro) {
    this.values.greeting = intro;
  }

  @action setProvider(provider) {
    this.values.provider = provider;
    console.log("Store에서 넘어가기전!!!!");
    console.log(this.values);
  }

  @action reset() {
    this.values.accessToken = undefined;
  }

  @action login() {
    this.inProgress = true;
    this.errors = undefined;
    console.log('login중')
    return (
      agent.Auth.login(this.values.accessToken, this.values.provider)
      .then(res => console.log(res))
        .then(({ user }) => this.root.commonStore.setToken(user.token))
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
        )
    );
  }

  @action register() {
    this.inProgress = true;
    this.errors = undefined;
    console.log('register중')
    return (
      agent.Auth.register(this.values.accessToken)
        .then(({ user }) => this.root.commonStore.setToken(user.token))
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
        )
    );
  }

  @action logout() {
    this.root.commonStore.setToken(undefined);
    this.root.userStore.forgetUser();
    return Promise.resolve();
  }
}

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
    accessToken: undefined,
    provider : undefined
  };

  @action setAccessToken(token) {
    this.values.accessToken = token;
  }

  @action setProvider(provider) {
    this.values.provider = provider;
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
        .then(({ user }) => CommonStore.setToken(user.token))
        .then(() => UserStore.pullUser()) //login 성공한 유저정보를 불러온다.
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
        .then(({ user }) => CommonStore.setToken(user.token))
        .then(() => UserStore.pullUser()) //login 성공한 유저정보를 불러온다.
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
    CommonStore.setToken(undefined);
    UserStore.forgetUser();
    return Promise.resolve();
  }
}

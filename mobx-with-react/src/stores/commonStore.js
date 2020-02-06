import { observable, action, computed, reaction } from "mobx";

import { getUnixTime } from "date-fns";

import agent from "../agent";

export default class CommonStore {
  @observable appName = "Prolog";
  @observable token = window.localStorage.getItem("jwt");

  constructor(root) {
    this.root = root;
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem("jwt", token);
        } else {
          window.localStorage.removeItem("jwt");
        }
      }
    );
  }

  @action setToken(token) {
    this.token = token;
  }
}

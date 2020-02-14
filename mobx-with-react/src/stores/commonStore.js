import { observable, action, computed, reaction } from "mobx";
import jwtDecode from 'jwt-decode';
import { getUnixTime } from "date-fns";

import agent from "../agent";

export default class CommonStore {
  @observable appName = "Prolog";
  @observable token = window.sessionStorage.getItem("jwt");
  
  constructor(root) {
    this.root = root;

    reaction(
      () => this.token,
      token => {
        if (token) {
          window.sessionStorage.setItem("jwt", token);
          const decoded_token = jwtDecode(token);
          console.log(decoded_token);
        } else {
          window.sessionStorage.removeItem("jwt");
        }
      }
    );
  }

  @action setToken(token) {
    this.token = token;
  }
}

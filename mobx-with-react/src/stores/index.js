import PostStore from './postStore';
import TestStore from './testStore';
import AuthStore from './authStore';
import CommonStore from './commonStore';
import UserStore from './userStore';

class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
    this.commonStore = new CommonStore(this);
    this.userStore = new UserStore(this);
    this.postStore = new PostStore(this);
    this.testStore = new TestStore(this);

  }
}

export default RootStore;
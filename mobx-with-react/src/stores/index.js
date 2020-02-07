import PostStore from './postStore';
import EditorStore from './editorStore';
import AuthStore from './authStore';
import CommonStore from './commonStore';
import UserStore from './userStore';
import CommentStore from './commentStore';

class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
    this.commonStore = new CommonStore(this);
    this.userStore = new UserStore(this);
    this.postStore = new PostStore(this);
    this.editorStore = new EditorStore(this);
    this.commentStore = new CommentStore(this);
  }
}

export default RootStore;
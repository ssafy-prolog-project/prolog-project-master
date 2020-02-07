import { observable, action } from "mobx";
import postStore from "./postStore";

export default class EditorStore {
  constructor(root) {
    this.root = root;
  }

  @observable inProgress = false;
  @observable errors = undefined;
  @observable postId = undefined;

  @observable title = ''; //제목
  @observable description = '';
  @observable body = ''; // draft js json 형식으로 저장
  @observable tagList = []; //해쉬태그들?

  @action setPostId(postId) {
      if( this.postId !== postId){
          this.reset();
          this.postId = postId
      } 
  }

  @action loadInitialData() {
    if (!this.postId) return Promise.resolve();
    this.inProgress = true;
    return postStore.loadArticle(this.postId, { acceptCached: true })
      .then(action((post) => {
        if (!post) throw new Error('Can\'t load original post');
        this.title = post.title;
        this.description = post.description;
        this.body = post.body;
        this.tagList = post.tagList;
      }))
      .finally(action(() => { this.inProgress = false; }));
  }

  @action reset(){
    this.title = '';
    this.description = '';
    this.body = '';
    this.tagList = [];
  }

  @action setTitle(title){
      this.title = title;
  }

  @action setDescription(description) {
    this.description = description;
  }

  @action setBody(body) {
    this.body = body;
  }

  @action addTag(tag) {
    if (this.tagList.includes(tag)) return;
    this.tagList.push(tag);
  }

  @action removeTag(tag) {
    this.tagList = this.tagList.filter(t => t !== tag);
  }

  @action submit() {
    this.inProgress = true;
    this.errors = undefined;
    const post = {
      title: this.title,
      description: this.description,
      body: this.body,
      tagList: this.tagList,
      slug: this.postId,
    };
    return (this.postId ? postStore.updatePost(post) : postStore.createPost(post))
      .catch(action((err) => {
        this.errors = err.response && err.response.body && err.response.body.errors; throw err;
      }))
      .finally(action(() => { this.inProgress = false; }));
  }
}

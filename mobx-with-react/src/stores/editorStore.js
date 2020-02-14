import { observable, action } from "mobx";
import postStore from "./postStore";

export default class EditorStore {
  constructor(root) {
    this.root = root;
  }
  //임시
  @observable postList = []

  @observable inProgress = false;
  @observable errors = undefined;
  @observable postId = undefined;

  @observable title = ''; //제목
  @observable coverColor = 'black'; //커버 칼라 (이미지 세팅 없을 경우만 사용될 것)
  @observable coverImage = '';
  @observable body = ''; // html string 형식으로 저장
  @observable tagList = []; //해쉬태그

  @action setPostId(postId) {
      if( this.postId !== postId){
          this.reset();
          this.postId = postId
      } 
  }

  @action loadInitialData() {
    if (!this.postId) return Promise.resolve();
    this.inProgress = true;
    return this.root.postStore.loadArticle(this.postId, { acceptCached: true })
      .then(action((post) => {
        if (!post) throw new Error('포스트를 불러올 수 없습니다.');
        this.title = post.title;
        this.coverColor = post.coverColor;
        this.coverImage = post.coverImage;
        this.body = post.body;
        this.tagList = post.tagList;
      }))
      .finally(action(() => { this.inProgress = false; }));
  }

  @action reset(){
    this.title = '';
    this.coverColor = 'white';
    this.coverImage = '';
    this.body = '';
    this.tagList = [];
  }

  @action setTitle(title){
      this.title = title;
      console.log(this.title)
  }

  @action setCoverColor(coverColor) {
    this.coverColor = coverColor;
  }

  @action setCoverImage(coverImage){
    this.coverIamge = coverImage;
  }

  @action setBody(body) {
    this.body = body;
    console.log(this.body)
  }

  @action setTags(tags){
    if (this.tagList !== tags) {
      this.tagList = tags;
    }
  }
  @action addTag(tag) {
    if (this.tagList.includes(tag)) return;
    this.tagList.push(tag);
  }

  @action removeTag(tag) {
    this.tagList = this.tagList.filter(t => t !== tag);
  }

  @action save() {
    //저장하고 글 읽는 페이지로 옮겨가도록
    
    this.inProgress = true;
    this.errors = undefined;
    const post = {
      title: this.title,
      coverColor: this.coverColor,
      coverImage: "image",
      body: this.body,
      postCode: undefined,
      tagList: this.tagList,
      //postCode: this.postCode
    };
    console.log("여기!!!!!")
    console.log(post)
    return (this.postCode ? this.root.postStore.updatePost(post) : this.root.postStore.createPost(post))
    // return (this.postCode ? this.root.postStore.updatePost(post) : this.root.postStore.createPost(post))
    //   .catch(action((err) => {
    //     this.errors = err.response && err.response.body && err.response.body.errors; throw err;
    //   }))
    //   .finally(action(() => { this.inProgress = false; }));
  }
}

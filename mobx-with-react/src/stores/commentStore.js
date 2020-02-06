import { observable, action } from "mobx";
import agent from "../agent";

export default class CommentStore {
  constructor(root) {
    this.root = root;
  }

  @observable isCreatingComment = false;
  @observable isLoadingComments = false;
  @observable commentErrors = undefined;
  @observable postId = undefined;
  @observable comments = [];

  @action setPostId(postId) {
    if (this.postId !== postId) {
      this.comments = [];
      this.postId = postId;
    }
  }

  @action loadComments() {
    this.isLoadingComments = true;
    this.commentErrors = undefined;
    return agent.Comments.forPost(this.postId);
    //   .then(
    //     action(({ comments }) => {
    //       this.comments = comments;
    //     })
    //   )
    //   .catch(
    //     action(err => {
    //       this.commentErrors =
    //         err.response && err.response.body && err.response.body.errors;
    //       throw err;
    //     })
    //   )
    //   .finally(
    //     action(() => {
    //       this.isLoadingComments = false;
    //     })
    //   );
  }

  @action createComment(comment) {
    this.isCreatingComment = true;
    return agent.Comments.create(this.postId, comment);
    //   .then(() => this.loadComments())
    //   .finally(
    //     action(() => {
    //       this.isCreatingComment = false;
    //     })
    //   );
  }

  @action deleteComment(id) {
    const idx = this.comments.findIndex(c => c.id === id);
    if (idx > -1) this.comments.splice(idx, 1);
    return agent.Comments.delete(this.postId, id)
    // .catch(
    //   action(err => {
    //     this.loadComments();
    //     throw err;
    //   })
    // );
  }
}

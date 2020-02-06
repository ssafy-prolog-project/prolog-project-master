import React, {Component } from 'react';
import { inject } from 'mobx-react';

@inject('commentStore')
class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      body: ''
    };

    //커멘트 내용 입력 이벤트
    this.handleBodyChange = e => {
      this.setState({ body: e.target.value });
    };

    //댓글 저장 이벤트
    this.createComment = e => {
        //입력버튼 누르기 전엔 실행하지 않는다.
      e.preventDefault();
      this.props.commentStore.createComment({ body: this.state.body })
        //.then(() => this.setState({ body: '' }));
    };
  }

  render() {
    const { isCreatingComment } = this.props.commentStore;
    return (
      <form className="card comment-form" onSubmit={this.createComment}>
        <div className="card-block">
          <textarea className="form-control"
            placeholder="Write a comment..."
            value={this.state.body}
            disabled={isCreatingComment}
            onChange={this.handleBodyChange}
            rows="3"
          />
        </div>
        <div className="card-footer">
          <img
            src={this.props.currentUser.image}
            className="comment-author-img"
            alt=""
          />
          <button
            className="btn btn-sm btn-primary"
            type="submit"
          >
            Post Comment
          </button>
        </div>
      </form>
    );
  }
}

export default CommentInput;
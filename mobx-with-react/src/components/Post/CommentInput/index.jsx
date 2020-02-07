import React, {Component } from 'react';
import { inject } from 'mobx-react';
import styled from "styled-components";

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
          <TextArea className="form-control"
            placeholder="댓글을 작성해주세요."
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
          <CButton
            className="btn btn-sm btn-primary"
            type="submit"
          >
            댓글 작성하기
          </CButton>
        </div>
      </form>
    );
  }
}

const TextArea = styled.textarea`
  margin-top: .5rem;
  margin-bottom: .5rem;
  width: 100%;
  overflow: visible;
  border-radius: .5rem;
  border-color: gray;
`

const CButton = styled.button`
  border: 0;
  float: right;
  width: 7rem;
  height: 2rem;
  border-radius: 3px;
  background-color: #1a3365;
  color: white;
`

export default CommentInput;
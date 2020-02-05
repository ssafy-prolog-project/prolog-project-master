import React from "react";
import { Link } from "react-router-dom";

//Components
import CommentInput from "../CommentInput";
import CommentList from "../CommentList";

const PostComments = props => {
  // 로그인 되어 있는 상태라면
  if (props.currentUser) {
    return (
      <div>
        <CommentInput></CommentInput>
        <CommentList></CommentList>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <Link to="/login">Sign in</Link>
          &nbsp;or&nbsp;
          <Link to="/register">sign up</Link>
          &nbsp;to add comments on this post.
        </p>
        <CommentList></CommentList>
      </div>
    );
  }
};

export default PostComments;

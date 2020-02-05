import { Link } from "react-router-dom";
import React from "react";

const PostActions = props => {
  const post = props.post;
  const handleDelete = () => props.onDelete(post.id);

  if (props.canModify) {
    return (
      <div>
        <span>
          <Link
            // 수정하러가야함. 새로운 link 현재는 없음 TODO
            to={`/editor/${post.id}`}
          >
            {" "}
            수정
          </Link>
          <button onClick={handleDelete}>삭제</button>
        </span>
      </div>
    );
  }

  return <span />;
};

export default PostActions;

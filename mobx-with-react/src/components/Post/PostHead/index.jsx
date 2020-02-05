import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import PostActions from "./PostActions";

const PostHead = observer(props => {
  const { title, date, author } = props.data;
  return (
    <div>
      {/* <Link to={`/@${article.author.username}`}>
        <img src={article.author.image} alt="" />
      </Link>

      <div className="info">
        <Link to={`/@${article.author.username}`} className="author">
          {article.author.username}
        </Link>
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div> */}

      <h1>공개? 비공개</h1>
      <PostTitle>{title}</PostTitle>
      <h2>{date}</h2>
      <h2>{author}</h2>
      <hr></hr>
      <PostActions
        canModify={props.canModify}
        post={props.post}
        onDelete={props.onDelete}
      />
    </div>
  );
});

export default PostHead;

const PostTitle = styled.div`
  /* 구분을 위한 스타일임 수정필요 */
  background-color: white;
  font-size: 4rem;
  font-family: Inconsolata;
`;

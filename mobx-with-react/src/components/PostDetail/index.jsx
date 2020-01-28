import React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";

import { format, fromUnixTime } from 'date-fns'

const PostDetail = ({ postid, posts }) => {
  const post = posts.get(postid);
  const { id, title, category, text, author, date, imgUrl } = post;
  const dateFormat = fromUnixTime(date)
  const dateInfo = format(dateFormat, 'yyyy년 MM월 dd일')

  return (
    <PostDetailLayout>
      <PostTitle>Post Detail Page {id}</PostTitle>
      <hr />
      <PostUserProfile>프로필 정보는 컴포넌트로 빼야할듯?</PostUserProfile>
      <PostUserProfile>
        작성일 : {dateInfo} 작성자 : {author}
      </PostUserProfile>
      <hr />
      <PostContent>
        <p>컨텐트이것도 컴포넌트로 넘기는게 좋을 듯</p>
        <PostContentImageWrapper>
            <PostContentImage src={imgUrl} alt={title}></PostContentImage>
        </PostContentImageWrapper>
        
        <h2>{title}</h2>
        <h3>{category}</h3>
        <p>{text}</p>
      </PostContent>
    </PostDetailLayout>
  );
};

const PostDetailLayout = styled.div`
  margin: 5vh 10vw;
  /* border-style: solid; */
  background-color: white;
  /* color: white;
    align-items: flex-end; */
  display: grid;
  @media (max-width: 768px) {
      grid-template-columns: 100%;
  }
`;

const PostTitle = styled.div`
  /* 구분을 위한 스타일임 수정필요 */
  background-color: white;
  font-size: 5rem;
  font-family: fantasy;
`;

const PostUserProfile = styled.div`
  /* 구분을 위한 스타일임 수정필요 */
  background-color: white;
  font-size: 2rem;
  font-family: fantasy;
`;

const PostContent = styled.div`
  /* 구분을 위한 스타일임 수정필요 */
  background-color: white;
  font-size: 1.5rem;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const PostContentImageWrapper = styled.div`
  /* 구분을 위한 스타일임 수정필요 */
  padding: 1%;
  max-width: 60%;
  overflow :hidden;
  height: auto;
`;

const PostContentImage = styled.img`
  /* 구분을 위한 스타일임 수정필요 */
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1%;
  width: 90%;
  max-height: 90%;
  
  :hover{
    opacity: 0.5;
    box-shadow: 0 0 2px 1px rgba(0, 300, 186, 0.5);
    
  } 
`;


export default inject(({ post }) => ({
  posts: post.postItems
}))(observer(PostDetail));

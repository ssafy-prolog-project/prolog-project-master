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
      <Div>
        <PostTitle>Post Detail Page {id}</PostTitle>
        <PostUserProfile>프로필 정보? 작성자와 차이는?</PostUserProfile>
        <PostUserProfile>
          작성일 : {dateInfo} <br/> 작성자 : {author}
        </PostUserProfile>
      </Div>
      <div><hr /></div>

      <ImageContent>
        <PostContentImageWrapper>
          <PostContentImage src={imgUrl} alt={title}></PostContentImage>
        </PostContentImageWrapper>
      </ImageContent>

      <Div>
      <PostContent>
        <p>컨텐트이것도 컴포넌트로 넘기는게 좋을 듯</p>
        
        
        <h2>{title}</h2>
        <h3>{category}</h3>
        <p>{text}</p>
      </PostContent>
      </Div>
    </PostDetailLayout>
  );
};

const Div = styled.div`
  @media (max-width: 768px) {
    margin-top: 10vh;
    margin-bottom: 5vh;
    margin-left: 5%;
    margin-right: 5%;
  }
`

const PostDetailLayout = styled.div`
  margin-top: 3vh;
  margin-bottom: 5vh;
  margin-left: 15%;
  margin-right: 15%;
  /* border-style: solid; */
  background-color: white;
  /* color: white;
    align-items: flex-end; */
  display: grid;
  @media (max-width: 768px) {
      grid-template-columns: 100%;
      margin: 0;
  }
`;

const PostTitle = styled.div`
  /* 구분을 위한 스타일임 수정필요 */
  background-color: white;
  font-size: 4rem;
  font-family: Inconsolata;
`;

const PostUserProfile = styled.div`
  /* 구분을 위한 스타일임 수정필요 */
  background-color: white;
  font-size: 1rem;
  font-family: Inconsolata;
`;

const PostContent = styled.div`
  /* 구분을 위한 스타일임 수정필요 */
  background-color: white;
  font-size: 1.5rem;
  font-family: Inconsolata;
`;

const ImageContent = styled.div`
  /* 구분을 위한 스타일임 수정필요 */
  background-color: white;
  padding-top: 5%;
  `;

const PostContentImageWrapper = styled.div`
  /* 구분을 위한 스타일임 수정필요 */
  max-width: 100%;
  overflow :hidden;
  height: auto;
`;

const PostContentImage = styled.img`
  /* 구분을 위한 스타일임 수정필요 */
  width: 100%;
  max-height: 90%;
  
  :hover{
    opacity: 0.5;
    box-shadow: 0 0 2px 1px rgba(0, 300, 186, 0.5);
    
  } 
`;


export default inject(({ postStore }) => ({
  posts: postStore.postItems
}))(observer(PostDetail));

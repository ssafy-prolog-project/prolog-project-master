import React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";

import { format, fromUnixTime } from 'date-fns'


const PostDetail = ({ postid, posts }) => {
  const post = posts.get(postid);
  const { postCode, title, body, author, updateDate, coverImg } = post;
  //const dateFormat = fromUnixTime(date)
  //const dateInfo = format(dateFormat, 'yyyy년 MM월 dd일')

  return (
    <PostDetailLayout>
      <ImageContent>
        <PostContentImageWrapper>
          <PostContentImage src={coverImg} alt={title}></PostContentImage>
        </PostContentImageWrapper>
      </ImageContent>

      <Div>
      <PostContent>
        
        <p>얘는 내용? : {body}</p>
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
  /* margin-left: 15%;
  margin-right: 15%; */
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
  @media (max-width: 768px) {
    margin:0;
  }
  
  @media (min-width: 768px) and (max-width: 1024px){
    padding-left: 10%;
    padding-right: 10%;
  }
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

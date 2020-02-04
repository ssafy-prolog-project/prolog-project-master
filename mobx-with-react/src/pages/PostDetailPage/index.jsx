import React from "react";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import PostHeader from "../../components/Post/Read/PostHeader";
import PostContent from "../../components/Post/Read/PostContent";
import PostSequence from "../../components/Post/Read/PostSequence";

// 원칙은 axios 로 호출하는 것일까? 어디서 호출하는지는 생각해봐야할듯

const PostDetailPage = ({ match }) => {
  const { id } = match.params;

  return (
    <PostDetailPageLayout>
      <PostHeader></PostHeader>
      <PostContent id={id}></PostContent>
      <PostSequence></PostSequence>
    </PostDetailPageLayout>
  );
};

const PostDetailPageLayout = styled.div`
  height: 100vh;
  display: grid;
  /* overflow-y: hidden; */
  /* grid-template-columns: 290px; */
  /* grid-template-areas: "nav content"; */
  @media (max-width: 768px) {
    grid-template-columns: 100vw;
  }
`;

export default PostDetailPage;

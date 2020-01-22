import React from "react";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import TopBar from "../../components/TopBar";
import PostDetail from "../../components/PostDetail";

// 원칙은 axios 로 호출하는 것일까? 어디서 호출하는지는 생각해봐야할듯

const PostDetailPage = ({ match }) => {
  const { id } = match.params;
  
  return (
    <PostDetailPageLayout>
      <NavBar></NavBar>
      <div>
        <TopBar></TopBar>
        <PostDetail postid={id}></PostDetail>
      </div>
    </PostDetailPageLayout>
  );
};

const PostDetailPageLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-areas: "nav content";
`;

const Div = styled.div`
  padding-bottom: 5%;
  display: grid;
  grid-template-rows: 7% 93%;
  overflow: scroll;
`;

export default PostDetailPage;

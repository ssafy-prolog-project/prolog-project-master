import React from "react";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import TopBar from "../../components/TopBar";
import PostDetail from "../../components/PostDetail";
import MobileNavBar from '../../components/MobileNavBar';

// 원칙은 axios 로 호출하는 것일까? 어디서 호출하는지는 생각해봐야할듯

const PostDetailPage = ({ match }) => {
  const { id } = match.params;
  
  return (
    <PostDetailPageLayout>
      <NavBar></NavBar>
      <Div>
        <TopBar></TopBar>
        <MobileNavBar></MobileNavBar>
        <PostDetail postid={id}></PostDetail>
      </Div>
    </PostDetailPageLayout>
  );
};

const PostDetailPageLayout = styled.div`
    height: 100vh;
    display: grid;
    overflow-y: hidden;
    grid-template-columns: 290px;
    grid-template-areas:
        "nav content";
    @media (max-width: 768px) {
        grid-template-columns: 100vw;
    }
  
`;

const Div = styled.div`
  padding-bottom: 5%;
  display: grid;
  grid-template-rows: 9% 9% 82%;
  overflow-y: scroll;
  @media (max-width: 768px) {
        grid-template-columns: 100%;
  }
`;

export default PostDetailPage;

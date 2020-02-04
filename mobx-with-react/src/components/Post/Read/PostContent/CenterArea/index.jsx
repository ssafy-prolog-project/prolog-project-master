import React from "react";
import styled from "styled-components";
import PostHead from "./PostHead";
import PostDetail from "./PostDetail";
import PostTags from "./PostTags";
import PostComments from "./PostComments";

const CenterArea = ({ id }) => {
  return (
    <CenterAreaLayout>
      <PostHead></PostHead>
      <PostDetail postid={id}></PostDetail>
      <PostTags></PostTags>
      <PostComments></PostComments>
    </CenterAreaLayout>
  );
};

const CenterAreaLayout = styled.div`
grid-template-columns : 100%
  grid-template-areas: "nav content";
  height: 70vh;
  display: grid;
`;

export default CenterArea;

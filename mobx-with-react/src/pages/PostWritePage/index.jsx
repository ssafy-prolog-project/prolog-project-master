import React from "react";
import WriteTopBar from "../../components/WriteTopBar";
import PostWrite from "../../components/PostWrite";
import styled from "styled-components";

const PostWritePage = () => {
  return (
    <PostWritePageLayout>
      <WriteTopBar></WriteTopBar>
      <PostWrite></PostWrite>
    </PostWritePageLayout>
  );
};

const PostWritePageLayout = styled.div`
  height: 100%;
`;

export default PostWritePage;

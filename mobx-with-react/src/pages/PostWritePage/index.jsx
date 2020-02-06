import React, { useState } from "react";
import WriteTopBar from "../../components/Write/WriteTopBar";
import WriteEditor from "../../components/Write/WriteEditor";
import styled from "styled-components";

const PostWritePage = () => {
  return (
    <PostWritePageLayout>
      <WriteTopBar></WriteTopBar>
      <WriteEditor></WriteEditor>
    </PostWritePageLayout>
  );
};

const PostWritePageLayout = styled.div`
  height: 100%;
`;

export default PostWritePage;

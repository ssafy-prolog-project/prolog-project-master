import React, {useState} from "react";
import WriteTopBar from "../../components/WriteTopBar";
import PostWrite from "../../components/PostWrite";
import styled from "styled-components";


const PostWritePage = () => {
  return (
    <PostWritePageLayout>
      <WriteTopBar></WriteTopBar>
      <PostWrite></PostWrite>
      {/* <RichEditorExample
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleBeforeInput={this._handleBeforeInput}
          handlePastedText={this._handlePastedText} /> */}
    </PostWritePageLayout>
  );
};

const PostWritePageLayout = styled.div`
  height: 100%;
`;

export default PostWritePage;

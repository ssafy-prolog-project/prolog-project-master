import React from "react";
import LeftArea from "./LeftArea";
import CenterArea from "./CenterArea";
import RightArea from "./RightArea";
import styled from "styled-components";

const PostContent = ({ id }) => {
  return (
    <PostContentLayout>
      <LeftArea></LeftArea>
      <CenterArea id={id}></CenterArea>
      <RightArea></RightArea>
    </PostContentLayout>
  );
};

const PostContentLayout = styled.div`
  grid-template-columns: 10% 80% 10%;
  grid-template-areas: "nav content";
  overflow-y: scroll;
  display: grid;
`;

export default PostContent;

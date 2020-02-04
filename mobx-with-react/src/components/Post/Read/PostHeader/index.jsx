//로고
// 사용자가 있으면 UserButton
import React from "react";
import PostLogo from "./PostLogo";
import UserButton from "./UserButton";
import styled from 'styled-components'

const PostHeader = () => {
  return (
    <PostHeaderLayout>
      <PostLogo></PostLogo>
      <div></div>
      <UserButton></UserButton>
    </PostHeaderLayout>
  )
};

const PostHeaderLayout = styled.div`
  grid-template-columns: 10%  80% 10%;
  grid-template-areas: "nav content";
  height: 15vh;
  display: grid;
`;

export default PostHeader;
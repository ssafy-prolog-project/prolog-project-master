import React, { useState } from "react";
import PostCard from "./PostCard";
import styled from 'styled-components';

const PostList = () => {
  // posts 는 그냥 api 호출을 통해서가져오는 것 뿐이다. 그럼 그냥 Posts를 axios로 호출하는 코드와
  // 그것을 보여주는 코드면 충분하다.
  // imgUrl, title, category, text, author
  const posts = [
    {
      imgUrl: "http://image.itdonga.com/files/2015/09/04/001.jpg",
      title: "test1",
      category: "post",
      text : "test 중..",
      author: "JEJ",
      date : "3/2/2019"
    },
    {
        imgUrl: "",
        title: "test2",
        category: "post",
        text : "test 중입니다.",
        author: "JKY",
        date : "3/2/2019"
      },
      {
          imgUrl: "",
          title: "test2",
          category: "post",
          text : "test 중입니다.",
          author: "JKY",
          date : "3/2/2019"
        },{
          imgUrl: "",
          title: "test2",
          category: "post",
          text : "test 중입니다.",
          author: "JKY",
          date : "3/2/2019"
        },{
          imgUrl: "",
          title: "test2",
          category: "post",
          text : "test 중입니다.",
          author: "JKY",
          date : "3/2/2019"
        },{
          imgUrl: "",
          title: "test2",
          category: "post",
          text : "test 중입니다.",
          author: "JKY",
          date : "3/2/2019"
        },{
          imgUrl: "",
          title: "test2",
          category: "post",
          text : "test 중입니다.",
          author: "JKY",
          date : "3/2/2019"
        }
  ]; // axios로 호출해서 받아오면 된다.
  const postCards = posts.map(post => <PostCard post={post} />);
  return <Divs>{postCards}</Divs>;
};

const Divs = styled.div`
  padding: 2%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(auto-fit, 1fr);
`

export default PostList;

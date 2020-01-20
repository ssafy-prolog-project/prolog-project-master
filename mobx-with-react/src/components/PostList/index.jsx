import React, { useState } from "react";
import PostCard from "./PostCard";

const PostList = () => {
  // posts 는 그냥 api 호출을 통해서가져오는 것 뿐이다. 그럼 그냥 Posts를 axios로 호출하는 코드와
  // 그것을 보여주는 코드면 충분하다.
  // imgUrl, title, category, text, author
  const posts = [
    {
      imgUrl: "http://image.itdonga.com/files/2015/09/04/001.jpg",
      title: "test1",
      category: "post",
      text : "Green apples have a high fiber content which helps in increasing the body's metabolism. While consuming an apple, make sure that you're not tossing the peel in the trash.",
      author: "JEJ",
      date : "3/2/2019"
    },
    {
        imgUrl: "",
        title: "test2",
        category: "post",
        text : "행복하세요. 오늘은 좋은 날이에요. 감사합니다. 여러분!!!?? 세상이 참 아름답죠?",
        author: "JKY",
        date : "3/2/2019"
      },
  ]; // axios로 호출해서 받아오면 된다.
  const postCards = posts.map(post => <PostCard post={post} />);
  return <div style={{ display: "flex" }}>{postCards}</div>;
};

export default PostList;

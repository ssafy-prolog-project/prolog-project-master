import React from "react";
import styled from "styled-components";

// data를 나중에 store로 옮기자. 어떤 자료를 가지고 있어야하지?
// imageUrl, Title, category, text, likes, comments, created_at, updated_at , author
// 일단 내부적으로 정의된 Post가 있고 이 Post의 DB 형태는 글을 작성하는 쪽에서 결정해야한다.
// 여기에서는 요청 결과로 들어온 Post 결과물만을 보여주면 충분하다.
const PostCard = ({ post }) => {
  const title = post.title;
  const onClick = () => {
    alert(title + "클릭했음");
  };

  return (
    <CardMainLayOut onClick={onClick}>
      <CardImage></CardImage>
      <CardTitle>{title}</CardTitle>
      <Date>3/2/2019</Date>
      <CardDescription>
        Green apples have a high fiber content which helps in increasing the
        body's metabolism. While consuming an apple, make sure that you're not
        tossing the peel in the trash. Consuming apple with its peel improves
        the overall health. Due to its high fiber content, apple helps in
        detoxification process. It keeps the liver and digestive system away
        from harmful elements.
      </CardDescription>
      <CardActionButton>0 Comments</CardActionButton>
      <CardActionButton>0 Likes</CardActionButton>
      <CardActionButton>0 Views</CardActionButton>
    </CardMainLayOut>
  );
};

const CardMainLayOut = styled.div`
  color: #fff;
  background-color: #ffc396;
  margin: 10px;
  padding: 15px;
  max-width: 460px;
  border-style: solid;
  border-width: 10px;
  border-color: black;
`;

const CardImage = styled.img``;

const CardTitle = styled.h2`
  color: #fff;
  font-weight: 300;
`;

const Date = styled.div`
  color: black;
  font-weight: 300;
  margin: 6px 0;
`;

const CardDescription = styled.p`
  color: #fff;
  font-weight: 300;
`;

const CardActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;

export default PostCard;

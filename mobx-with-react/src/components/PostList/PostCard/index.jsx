import React from "react";
import styled from "styled-components";

// data를 나중에 store로 옮기자. 어떤 자료를 가지고 있어야하지?
// imageUrl, Title, category, text, likes, comments, created_at, updated_at , author
// imageUrl이 none이면 그냥 타이틀을 키울까?
// 일단 내부적으로 정의된 Post가 있고 이 Post의 DB 형태는 글을 작성하는 쪽에서 결정해야한다.
// 여기에서는 요청 결과로 들어온 Post 결과물만을 보여주면 충분하다.
const PostCard = ({ post }) => {
  const { imgUrl, title, text, author, date } = post;
  const onClick = () => {
    alert(title + "클릭했음 나중에 페이지 옮기는 코드 넣자.");
  };

  return (
    <CardMainLayOut>
      {imgUrl ? (
        <CardImage onClick={onClick} src={imgUrl}></CardImage>
      ) : (
        <DefaultImage onClick={onClick}></DefaultImage>
      )}
      <CardTitle>{title}</CardTitle>
      {/* <Date>{date}</Date>
      <CardDescription>{text}</CardDescription> */}
      <p style={{ color: "black" }}>작성자 : {author}</p>
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

const CardImage = styled.img`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 5px;
  width: 150px;
`;

const DefaultImage = styled.img`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 5px;
  width: 150px;
  height: 150px;
  background-color: black;
`;

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

export default PostCard;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { formatDistanceToNow, fromUnixTime } from 'date-fns'
import { ko } from 'date-fns/locale'

// data를 나중에 store로 옮기자. 어떤 자료를 가지고 있어야하지?
// imageUrl, Title, category, text, likes, comments, created_at, updated_at , author
// imageUrl이 none이면 그냥 타이틀을 키울까?
// 일단 내부적으로 정의된 Post가 있고 이 Post의 DB 형태는 글을 작성하는 쪽에서 결정해야한다.
// 여기에서는 요청 결과로 들어온 Post 결과물만을 보여주면 충분하다.
const PostCard = ({ post }) => {
  const { id, imgUrl, title, text, author, date, views } = post;
  const dateFormat = fromUnixTime(date)
  const dateInfo = formatDistanceToNow(dateFormat, {addSuffix:true, locale:ko})

  return (
    <CardMainLayOut>
      <OutL>
        <Link to={"/post/" + id}>
          {imgUrl ? (
            <CardImage src={imgUrl}></CardImage>
          ) : (
            <DefaultImage></DefaultImage>
          )}
        </Link>
      </OutL>
      <OutT>
        <CardTitle>{title}</CardTitle>
        <Date>{dateInfo}</Date>
        {/* <CardDescription>{text}</CardDescription> */}
        <p style={{ color: "black" }}>작성자 : {author}</p>
        <p style={{ color: "black" }}>조회수 : {views}</p>
        <p style={{ color: "black" }}>아이디 : {id}</p>
      </OutT>
    </CardMainLayOut>
  );
};

const CardMainLayOut = styled.div`
  color: #fff;
  background-color: #f0f0f0;
  margin: 10px;
  width: auto;
  max-width: 100%;
`;

const OutL = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  /* padding: 0.1rem; */
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 56.26%;
  top: 0;
  left: 0;
`;

const CardImage = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const DefaultImage = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
`;

const CardTitle = styled.h2`
  font-weight: bold;
  color: black;
`;

const OutT = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
  font-family: Inconsolata;
`;

const Date = styled.div`
  color: black;
  font-weight: 300;
  margin: 6px 0;
`;

const CardDescription = styled.p`
  color: black;
  font-weight: 300;
`;

export default PostCard;

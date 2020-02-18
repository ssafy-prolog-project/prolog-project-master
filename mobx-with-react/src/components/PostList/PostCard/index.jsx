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
  const {createDate ,updateDate,postCode, user,title,coverColor,tagList,body,postLike,postView,coverImage,postPrev,postNext,pinPost,pinProject} = post;

  return (
    <CardMainLayOut>
      <OutL>
        <Link to={"/post/" + postCode} style={{ textDecoration: "none" }}>
         
          {coverImage ? (
            <CardImage src={coverImage}></CardImage>
          ) : (
            <DefaultImage color={coverColor}></DefaultImage>
          )}
        </Link>
      </OutL>
      <OutT>
      <CardTitle>{title}</CardTitle>
    
      {user.picture ? (
            <ProfileImage src={user.picture}></ProfileImage>
          ) : (
            <DefaultProfile color={coverColor}></DefaultProfile>
          )}
        {/* <Date>{dateInfo}</Date> */}
        {/* <CardDescription>{text}</CardDescription> */}
        {/* <p style={{ color: "black" }}>작성자 : {author}</p>
        <p style={{ color: "black" }}>조회수 : {views}</p>
        <p style={{ color: "black" }}>아이디 : {id}</p> */}
      </OutT>
    </CardMainLayOut>
  );
};
const ProfileImage = styled.img`
width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  z-index: 2;
`;

const DefaultProfile = styled.div`
width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  margin-right: 5%;
  z-index: 2;
  background-color: ${props => props.color};
`;

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
  :hover{
    filter: brightness(70%);
  }
`;

const DefaultImage = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
  z-index: 1;
  :hover{
    filter: brightness(70%);
  }
  /* background-color: ; */
`;

const CardTitle = styled.h2`
  color: black;
  z-index: 2;
  position: relative;
  /* top:60px;
  left: 40%; */
  font-family: Inconsolas;
  font-size: 20px;
  float: left;
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

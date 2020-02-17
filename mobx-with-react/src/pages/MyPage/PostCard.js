import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { formatDistanceToNow, fromUnixTime } from 'date-fns'
import { ko } from 'date-fns/locale'

const PostCard = ({ post }) => {
    const { postCode, coverImg, title, body, author, updateDate, postView } = post;
    //const dateFormat = fromUnixTime(date)
    //const dateInfo = formatDistanceToNow(dateFormat, {addSuffix:true, locale:ko})
  
    return (
      <CardMainLayOut>
        <OutL>
          <Link to={"/post/" + postCode}>
            {coverImg ? (
              <CardImage src={coverImg}></CardImage>
            ) : (
              <DefaultImage></DefaultImage>
            )}
          </Link>
        </OutL>
        <OutT>
          <CardTitle>{title}</CardTitle>
          <Date>{updateDate}</Date>
          <p style={{ color: "black" }}>조회수 : {postView}</p>
        </OutT>
        <hr/>
      </CardMainLayOut>
    );
  };
  
  const CardMainLayOut = styled.div`
    color: #fff;
    background-color: white;
    margin: 10px;
    width: auto;
    max-width: 100%-10px;
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
    max-height: 5.5rem;
    text-overflow: ellipsis;
    font-weight: 300;
    overflow: hidden;
    width: 100%;

    @media (max-width: 1024px){
      
    }
  `;
  
  export default PostCard;
  
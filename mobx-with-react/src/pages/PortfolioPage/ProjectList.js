import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { formatDistanceToNow, fromUnixTime } from 'date-fns'
import { ko } from 'date-fns/locale'

const ProjectList = ({post}) => {
    const { postCode, coverImage, coverColor, title, body,  updateDate } = post;
    //console.log(updateDate)
    //const dateFormat = fromUnixTime(updateDate)
    //console.log("여기야!!!!!" + dateFormat + " " + updateDate);
    //const dateInfo = formatDistanceToNow(dateFormat, {addSuffix:true, locale:ko})
   
    return(
        <ProjectListLayout>
            <OutL>
                <Link to={"/post/" + postCode}>
                {coverImage ? (
                    <CardImage src={coverImage}></CardImage>
                ) : (
                    <DefaultImage color={coverColor}></DefaultImage>
                )}
                </Link>
            </OutL>
            <OutT>
                <CardTitle>{title}</CardTitle>
                {/* <CardDescription>{text}</CardDescription> */}
                <p style={{ color: "black" }}>{updateDate}</p>
                
            </OutT>
        </ProjectListLayout>
    )
};

const ProjectListLayout = styled.div`
    grid-area: project;
    margin-bottom: 2rem;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-areas: 'img content';

    @media (max-width: 768px){
      display: block;
      grid-template-columns: none;
      grid-template-rows: 40%;
      grid-template-areas: 'img' 'content';
      padding: 1rem;
      width: auto;
    }
`;

const OutL = styled.div`
    grid-area: img;
    border-radius: 4px;
    /* padding: 0.1rem; */
    position: relative;
    width: 100%;
    height: auto;
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

const DefaultImage = styled.div`
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.color};
`;

const CardTitle = styled.h2`
    font-weight: bold;
    color: black;
    margin: 0;
`;

const OutT = styled.div`
    grid-area: content;
    background-color: white;
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

export default ProjectList;
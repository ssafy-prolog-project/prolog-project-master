import React from 'react';
import NavBar from '../../components/NavBar';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';

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
    ]


const PostDetailPage = ({match}) => {
    const {id} = match.params;
    const post = posts[id]
    const { imgUrl, title, category, text, author, date} = post;
    return (
    <PostDetailPageLayout>
        <NavBar></NavBar>
        <div>
            <TopBar></TopBar>
            <h1>Post Detail Page {id}</h1>
            <h2>{title}</h2>
            <h3>{category}</h3>
            <p>{text}</p>
            <h2>{author}</h2>
            <h3>{date}</h3>
            <img src={imgUrl} alt={title}></img>
        </div>
    </PostDetailPageLayout>
);
}

const PostDetailPageLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-areas:
        "nav content"
        
`;

const Div = styled.div`
    padding-bottom: 5%;
    display: grid;
    grid-template-rows: 7% 93%;
    overflow: scroll;
`


export
 default PostDetailPage;
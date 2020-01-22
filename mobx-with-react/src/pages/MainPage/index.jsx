import React from 'react';
import PostList from '../../components/PostList';
import NavBar from '../../components/NavBar';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';

const MainPage = () => (
    <MainPageLayout>
        <NavBar></NavBar>
        <Div>
            <TopBar></TopBar>
            <MobileNavBar><h1>test</h1></MobileNavBar>
            <PostList></PostList>
        </Div>
    </MainPageLayout>
);

const MainPageLayout = styled.div`
    height: 100vh;
    display: grid;
    overflow-y: hidden;
    grid-template-columns: 290px;
    grid-template-areas:
        "nav content";
    @media (max-width: 768px) {
        grid-template-columns: 100vw;
  }
`;

const Div = styled.div`
    padding-bottom: 5%;
    display: grid;
    grid-template-rows: 9% 9% 82%;
    overflow-y: scroll;
`

const MobileNavBar = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
  }
`

export default MainPage;
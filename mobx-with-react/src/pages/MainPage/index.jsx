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
        "nav content"
        
`;

const Div = styled.div`
    padding-bottom: 5%;
    display: grid;
    grid-template-rows: 7% 93%;
    overflow-y: scroll;
`

export default MainPage;
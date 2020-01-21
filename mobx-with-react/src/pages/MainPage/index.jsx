import React from 'react';
import PostList from '../../components/PostList';
import NavBar from '../../components/NavBar';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';

const MainPage = () => (
    <MainPageLayout>
        <NavBar></NavBar>
        <div>
            <TopBar></TopBar>
            <PostList></PostList>
        </div>
    </MainPageLayout>
);


const MainPageLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 4fr;
    column-gap: 5%;
    grid-template-areas:
        "nav main"

`
const nav = styled.nav`
    grid-area: nav;
`
const main = styled.main`
    grid-area: main;
`

export default MainPage;
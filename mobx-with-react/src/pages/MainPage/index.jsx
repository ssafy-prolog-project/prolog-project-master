import React from 'react';
import PostList from '../../components/PostList';
import NavBar from '../../components/NavBar';
import styled from 'styled-components';

const MainPage = () => (
    <MainPageLayout>
        <NavBar></NavBar>
        <PostList></PostList>
    </MainPageLayout>
);


const MainPageLayout = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    grid-template-areas:
        "nav main main main main"

`
const nav = styled.nav`
    grid-area: nav;
`
const main = styled.main`
    grid-area: main;
`

export default MainPage;
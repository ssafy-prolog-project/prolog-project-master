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
    background-color : lightblue;
    
    /* will be layout css code  */
    
`;

export default MainPage;
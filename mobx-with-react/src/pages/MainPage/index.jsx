import react from 'react';
import test from '../../components/TodoList';
import styled from 'styled-components';

const MainPage = () => (
    <MainPageLayout>
        <Nav></Nav>
        <CardComponent></CardComponent>
    </MainPageLayout>
);

const MainPageLayout = styled.div`
    /* will be layout css code  */
`;

export default MainPage;
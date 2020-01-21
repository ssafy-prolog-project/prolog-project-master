import React from 'react';
import Profile from './Profile';
import Right from './Right';
import styled from 'styled-components';

const TopBar = () => {
    return (
        <TopBarLayout>
            <Profile></Profile>
            <Right></Right>
        </TopBarLayout>
    );
};

const TopBarLayout = styled.div`
    background-color : black;
    color: white;
    align-items: flex-end;
    /* will be layout css code  */
`;

export default TopBar;
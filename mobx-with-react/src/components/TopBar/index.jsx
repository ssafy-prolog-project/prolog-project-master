import React from 'react';
import ProfileBtn from './ProfileBtn';
import Write from './Write';
import styled from 'styled-components';

const TopBar = () => {
    return (
        <TopBarLayout>
            <ProfileBtn></ProfileBtn>
            <Write></Write>
        </TopBarLayout>
    );
};

const TopBarLayout = styled.div`
    background-color : white;
    color: white;
    align-items: flex-end;
    /* will be layout css code  */
`;


export default TopBar;
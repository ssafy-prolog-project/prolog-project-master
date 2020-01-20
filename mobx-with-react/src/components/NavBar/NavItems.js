import React from 'react';
import styled from 'styled-components';

const NavItems = () => {
    return (
        <NavItemsLayout>
            <NavItem>최신순</NavItem>
            <NavItem>조회수순</NavItem>
            <NavItem>내가 쓴 글</NavItem>
        </NavItemsLayout>
    );
};

const NavItemsLayout = styled.div`
    padding-top: .5rem;
    
    /* will be layout css code  */
    
`;

const NavItem = styled.div`
    padding-top: .5rem;
    padding-bottom: .5rem;
    margin-left: .5rem;
`;


export default NavItems;
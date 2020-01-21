import React from 'react';
import styled from 'styled-components';

const NavItems = () => {
    const Latest = () => {
        alert("최신순으로 보여줘!");
    };
    const Count = () => {
        alert("조회수순으로 보여줘!");
    };
    const MyPosts = () => {
        alert("내가 쓴 글 보여줘!");
    };

    return (
        <NavItemsLayout>
            <NavItem onClick={Latest}>
                <ItemContent>최신순</ItemContent>
            </NavItem>
            <NavItem onClick={Count}>
                <ItemContent>조회수순</ItemContent>
            </NavItem>
            <NavItem onClick={MyPosts}>
                <ItemContent>내가 쓴 글</ItemContent>
            </NavItem>
        </NavItemsLayout>
    );
};

const NavItemsLayout = styled.ul`

    list-style: none;
    padding-left: 0;
    border-top-style: solid;
    border-width: 1px;
    /* will be layout css code  */
`;

const NavItem = styled.li`
    cursor: pointer;
    font-size: 20px;
    border-width: 1px;
    border-color: white;
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom-style: solid;
`;

const ItemContent = styled.a`
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1.125rem;
    padding-left: 1.75rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
`;

export default NavItems;
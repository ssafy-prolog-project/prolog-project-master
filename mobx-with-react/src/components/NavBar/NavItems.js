import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const NavItems = () => {
  const Latest = () => {
    alert("최신순으로 정렬!");
  };
  const Count = () => {
    alert("조회수순으로 정렬!");
  };
  const MyPosts = () => {
    alert("내가쓴글보여줘!");
  };

  return (
    <NavItemsLayout>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <NavItem onClick={Latest}>
          <ItemContent>최신순</ItemContent>
        </NavItem>
      </Link>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <NavItem onClick={Count}>
          <ItemContent>조회수순</ItemContent>
        </NavItem>
      </Link>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <NavItem onClick={MyPosts}>
          <ItemContent>내가 쓴 글</ItemContent>
        </NavItem>
      </Link>
    </NavItemsLayout>
  );
};

const NavItemsLayout = styled.ul`
  list-style: none;
  padding-left: 0;
  border-top-style: solid;
  border-color: white;
  border-width: 1px;
  /* will be layout css code  */
`;

const NavItem = styled.li`
  color: white;
  cursor: pointer;
  font-size: 20px;
  border-width: 1px;
  border-color: white;
  padding-top: 5px;
  padding-bottom: 12px;
  border-bottom-style: solid;
  :hover {
    background-color: #00aec9;
  }
`;

const ItemContent = styled.a`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1.125rem;
  padding-left: 1.75rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
`;

export default NavItems;

import React, { useState, useEffect } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import PostCard from "../PostList/PostCard";
import { signIn } from "../Auth/auth";
import AuthRoute from "../Auth/AuthRoute";
import LogoutButton from "./LogoutButton";

const NavItems = ({
  posts,
  onAdd,
  onDelete,
  onSortByIds,
  onSortByViews,
  onSortByAuthors,
  onSortByDates,
  values
}) => {
  const postCards = posts.map(item => <PostCard key={item.id} post={item} />);
  
    const jwt = window.sessionStorage.getItem("jwt");
    const { accessToken, provider, id, name, profileimg } = values;
  return (
    <NavItemsLayout>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <NavItem onClick={onSortByDates}>
          <ItemContent>최신순</ItemContent>
        </NavItem>
      </Link>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <NavItem onClick={onSortByViews}>
          <ItemContent>조회수순</ItemContent>
        </NavItem>
      </Link>
      {/* <Link to={"/"} style={{textDecoration:"none"}}>
        <NavItem onClick={onSortByIds}>
          <ItemContent>내가 쓴 글</ItemContent>
        </NavItem>
        </Link> */}
      {jwt ? (
        <NavItem onClick={onSortByAuthors}>
          <ItemContent>내가 쓴 글</ItemContent>
        </NavItem>
      ) : (
        <></>
      )}
    </NavItemsLayout>
  );
};

const NavItemsLayout = styled.ul`
  list-style: none;
  padding-left: 0;
  /* border-top-style: solid;
  border-color: white;
  border-width: 1px; */
  /* will be layout css code  */
`;

const NavItem = styled.li`
  color: white;
  cursor: pointer;
  font-size: 20px;
  /* border-width: 1px; */
  /* border-color: white; */
  padding-top: 5px;
  padding-bottom: 12px;
  /* border-bottom-style: solid; */
  :hover {
    background-color: white;
    color: black;
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

export default inject(({ postStore, authStore }) => ({
  posts: postStore.postItems,
  onAdd: postStore.add,
  onDelete: postStore.delete,
  nextId: postStore.nextId,
  onSortByIds: postStore.sortByIds,
  onSortByViews: postStore.sortByViews,
  onSortByAuthors: postStore.sortByAuthors,
  onSortByDates: postStore.sortByDates,
  values: authStore.values
}))(observer(NavItems));

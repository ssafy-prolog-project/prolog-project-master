import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import PostCard from "../PostList/PostCard";
import { Link } from 'react-router-dom';

const MNavItems = ({ posts, onAdd, onDelete, onSortByIds, onSortByViews, onSortByAuthors, onSortByDates }) => {
  const postCards = posts.map(item => <PostCard key={item.id} post={item} />);

  return (
    <NavItemsLayout>
      <Link to={"/"} style={{textDecoration:"none"}}>
        <NavItem onClick={onSortByDates}>
          <ItemContent>최신순</ItemContent>
        </NavItem>
        </Link>
        <Link to={"/"} style={{textDecoration:"none"}}>
        <NavItem onClick={onSortByViews}>
          <ItemContent>조회수순</ItemContent>
        </NavItem>
        </Link>
        <Link to={"/"} style={{textDecoration:"none"}}>
        <NavItem onClick={onSortByAuthors}>
          <ItemContent>내가 쓴 글</ItemContent>
        </NavItem>
        </Link>
    </NavItemsLayout>
  );
};

const NavItemsLayout = styled.div`
  /* will be layout css code  */
`;

const NavItem = styled.div`
  color: white;
  cursor: pointer;
  font-size: 20px;
  width: 33.3333%;
  height: 3rem;
  float: left;
  padding-top: 1.3rem;
  padding-bottom: auto;
  :hover {
    background-color: white;
    color: black;
  }
`;

const ItemContent = styled.div`
  /* padding-top: 0.75rem;
  padding-bottom: 0.75rem; */
  font-size: 1.125rem;
  text-align: center;
  /* -ms-flex-align: center; */
  /* align-items: center; */
`;

export default inject(({ post }) => ({
  posts: post.postItems,
  onAdd: post.add,
  onDelete: post.delete,
  nextId: post.nextId,
  onSortByIds : post.sortByIds,
  onSortByViews : post.sortByViews,
  onSortByAuthors : post.sortByAuthors,
  onSortByDates : post.sortByDates,
}))(observer(MNavItems));
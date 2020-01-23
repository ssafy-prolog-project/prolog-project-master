import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import PostCard from "../PostList/PostCard";

const NavItems = ({ posts, onAdd, onDelete, onSortByIds, onSortByViews, onSortByAuthors, onSortByDates }) => {
  const postCards = posts.map(item => <PostCard key={item.id} post={item} />);

  return (
    <NavItemsLayout>
        <NavItem  onClick={onSortByDates}>
          <ItemContent>최신순</ItemContent>
        </NavItem>
        <NavItem onClick={onSortByViews}>
          <ItemContent>조회수순</ItemContent>
        </NavItem>
        <NavItem onClick={onSortByAuthors}>
          <ItemContent>내가 쓴 글</ItemContent>
        </NavItem>
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


export default inject(({ post }) => ({
  posts: post.postItems,
  onAdd: post.add,
  onDelete: post.delete,
  nextId: post.nextId,
  onSortByIds : post.sortByIds,
  onSortByViews : post.sortByViews,
  onSortByAuthors : post.sortByAuthors,
  onSortByDates : post.sortByDates,
}))(observer(NavItems));


import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import PostCard from "../PostList/PostCard";

const MNavItems = ({ posts, onAdd, onDelete, onSortByIds, onSortByViews, onSortByAuthors, onSortByDates }) => {
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

const NavItemsLayout = styled.div`
  /* will be layout css code  */
`;

const NavItem = styled.div`
  color: white;
  cursor: pointer;
  font-size: 20px;
  width: 33.3333%;
  height: 100%;
  float: left;
  padding-top: 2rem;
  padding-bottom: 1.64rem;
  :hover {
    background-color: #00aec9;
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
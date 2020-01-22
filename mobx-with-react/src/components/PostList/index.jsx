import React, { useState } from "react";
import PostCard from "./PostCard";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

const PostList = ({ posts, onAdd, onDelete, onSortByIds, onSortByViews, onSortByAuthors, onSortByDates }) => {
  // posts 는 그냥 api 호출을 통해서가져오는 것 뿐이다. 그럼 그냥 Posts를 axios로 호출하는 코드와
  // 그것을 보여주는 코드면 충분하다.
  // imgUrl, title, category, text, author

  const postCards = posts.map(item => <PostCard key={item.id} post={item} />);
  return (
    <Divs>
      <div>
        <button onClick={onAdd}>추가추가</button>
        <button onClick={onDelete}>삭제삭제</button>
        <button onClick={onSortByAuthors}>이름순 정렬</button>
        <button onClick={onSortByViews}>뷰순 정렬</button>
        <button onClick={onSortByIds}>아이디순 정렬</button>
        <button onClick={onSortByDates}>날짜별 정렬</button>
      </div>

      {postCards}
    </Divs>
  );
};

const Divs = styled.div`
  padding: 2%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 25%);
  grid-template-rows: repeat(auto-fit, 1fr);

  @media (max-width: 1024px) {
    /*태블릿?*/
    grid-template-columns: repeat(auto-fit, 33%);
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(auto-fit, 1fr);
  }
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
}))(observer(PostList));

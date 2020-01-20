import React, { useState } from 'react';
import PostCard from './PostCard'

const PostList = () => {
    // posts 는 그냥 api 호출을 통해서가져오는 것 뿐이다. 그럼 그냥 Posts를 axios로 호출하는 코드와 
    // 그것을 보여주는 코드면 충분하다. 
    const posts = [
        { title: 'test1'},
        { title: 'test2'}
    ]  // axios로 호출해서 받아오면 된다.
    const postCards = posts.map(post => <PostCard post={post}/>)
    return (
        <div style={{ display: "flex"}}>
            { postCards }
        </div>
    );
};

export default PostList;
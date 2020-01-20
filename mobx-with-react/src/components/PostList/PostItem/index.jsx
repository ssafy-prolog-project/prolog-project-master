import React from 'react';

// data를 나중에 store로 옮기자. 어떤 자료를 가지고 있어야하지? 
// Post 
const PostItem = ({title}) => {
    return (
        <div>
            {/* 이미지 */}
            <h1>{title}</h1>
        </div>
    );
};

export default PostItem;
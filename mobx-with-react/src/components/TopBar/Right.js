import React from 'react';
import {Plus} from 'styled-icons/boxicons-regular/Plus';
import styled from 'styled-components';

export const PlusIcon = styled(Plus)`
  width: 60px;
  height: 90%;
  cursor: pointer;
  float: right;
`;

const Right = () => {
    const PlusClick = () => {
        alert("아이콘을 눌렀어요!");
    }

    return (
        <PlusIcon onClick={PlusClick}></PlusIcon>
    );
}


const PostRight = styled.div`
    
    /* will be layout css code  */
`;
const PortfolioRight = styled.div`
    
    /* will be layout css code  */
`;

export default Right;
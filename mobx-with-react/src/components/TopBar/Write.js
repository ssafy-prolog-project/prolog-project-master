import React from 'react';
import {Plus} from 'styled-icons/boxicons-regular/Plus';
import styled from 'styled-components';


export const PlusIcon = styled(Plus)`
  width: 60px;
  height: 90%;
  cursor: pointer;
  float: right;
`;

const Write = () => {
    const PlusClick = () => {
        alert("아이콘을 눌렀어요!");
    }

    return (
        <PlusIcon onClick={PlusClick}></PlusIcon>
    );
}



export default Write;
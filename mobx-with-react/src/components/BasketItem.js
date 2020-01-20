import React from 'react';
import './BasketItem.css';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const BasketItem = observer(({ item, onTake }) => {
    return (
      <div className="BasketItem">
        <div className="name">{item.name}</div>
        <div className="price">{item.price}원</div>
        <div className="count">{item.count}</div>
        <div className="return" onClick={() => onTake(item.name)}>
          갖다놓기
        </div>
        <TestDiv>
          awdawd
        </TestDiv>
      </div>
    );
  });

const TestDiv = styled.div`
  background-color: red;
  height : 200px;
  width : 200px;
`;

  export default BasketItem;
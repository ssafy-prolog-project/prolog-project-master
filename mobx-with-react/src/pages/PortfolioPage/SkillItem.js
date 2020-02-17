import React, { Component } from 'react';
import styled from "styled-components";

class SkillItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <SkillItemLayout onClick={() => onToggle(id)}>
        <Remove onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</Remove>
        {text}
      </SkillItemLayout>
    );
  }
}

const SkillItemLayout = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    cursor: pointer;
    transition: all 0.15s;
    user-select: none;
    :hover{
        background: #e3fafc;
    }
`

const Remove = styled.div`
    margin-right: 1rem;
    color: #e64980;
    font-weight: 600;
    opacity: 0;
`

export default SkillItem;
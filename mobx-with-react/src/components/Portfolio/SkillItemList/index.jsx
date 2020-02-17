import React, { Component } from 'react';
import SkillItem from '../SkillItem';
import styled from 'styled-components';

class SkillItemList extends Component {
  render() {
    //TODO : null처리
    const skillList  = this.props.skills.map((item,index)=> (
      <SkillItem key={index} text={item.value} />
    ));
    return (
      <SkillItemListLayout>
        {skillList}       
      </SkillItemListLayout>
    );
  }
}

const SkillItemListLayout = styled.div`
 /* display: flex; */
`

export default SkillItemList;
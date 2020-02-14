import React, { Component } from 'react';
import SkillItem from './SkillItem';

class SkillItemList extends Component {
  render() {
    const { skills, checked, onToggle, onRemove } = this.props;
    const skillList = skills.map(
        ({text}) => (
            <SkillItem text={text}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            />
        )

    )
    return (
      <div>
        {skillList}       
      </div>
    );
  }
}

export default SkillItemList;
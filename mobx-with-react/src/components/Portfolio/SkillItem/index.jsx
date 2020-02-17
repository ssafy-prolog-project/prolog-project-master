import React, { Component } from "react";
import styled from "styled-components";

import DevIcon, {iconList} from "devicon-react-svg";



class SkillItem extends Component {
  render() {
  //   const devIconStyle = {
  //     fill: "thistle",
  //     width: "150px",
  // };
  // <DevIcon icon="react" style={devIconStyle} viewBox="0 0 32 32"/>
    const { text } = this.props;
    //console.log(`Here is a list of icon names used by this component: ${iconList}`);
    return (
      <SkillItemLayout>
        <DevIcon icon={text}/>
      </SkillItemLayout>
    );
  }
}

const SkillItemLayout = styled.div`
    max-width: 3em;
    /* padding: 1rem;
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    /* cursor: pointer;
    transition: all 0.15s;
    user-select: none;
    :hover{
        background: #e3fafc;
    } */ */
`;

const Remove = styled.div`
  margin-right: 1rem;
  color: #e64980;
  font-weight: 600;
  opacity: 0;
`;

export default SkillItem;

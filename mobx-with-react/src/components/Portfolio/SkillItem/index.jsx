import React, { Component } from "react";
import styled from "styled-components";

import DevIcon, {iconList} from "devicon-react-svg";



class SkillItem extends Component {
  render() {
    const devIconStyle = {
      fill: "black",
      width: "150px",
  };
  // <DevIcon icon="react" style={devIconStyle} viewBox="0 0 32 32"/>
    const { text } = this.props;
    //console.log(`Here is a list of icon names used by this component: ${iconList}`);
    return (
      <SkillItemLayout>
        <DevIcon icon={text} style={devIconStyle}/>
      </SkillItemLayout>
    );
  }
}

const SkillItemLayout = styled.div`
    width:200px;
  height:200px;
  /* border:1px solid red; */
  display:inline-flex;
  vertical-align:top;
  justify-content:center;
  align-items:center;
`;

export default SkillItem;

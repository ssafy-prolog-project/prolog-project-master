import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import TagEditor from "react-tageditor";
import "react-tageditor/dist/style/default.css"; //css바꾸고 싶으면 저기서 바꾸거나 가져와서 바꾸면 됨.

class WriteTags extends React.Component {
  constructor(props) {
    super(props);
    const tagList = this.props.tagList;
    this.state = {
      tags: tagList
    };
    console.log(props);
    this.handleTagsChange = this.handleTagsChange.bind(this);
  }

  handleTagsChange(tagsChanged, allTags, action) {
    this.props.changeTags(allTags);
  }

  render() {
    const tagList = this.props.tagList;
    return (
      <WriteTagLayout>
        {/* <button onClick={()=>console.log(tagList)}>체크</button> */}
        {/* <TagEditor tags={tagList} delimiters={[',']} placeholder="태그를 입력하세요." onChange={} /> */}
        <TagEditor
          ref="tagEditor"
          tags={this.state.tags}
          delimiters={[13, ","]} //13은 enter
          placeholder="태그를 입력해주세요."
          onChange={this.handleTagsChange}
        />
        {/* <div className="output">Tags output: {this.state.tags.join(", ")}</div> */}
      </WriteTagLayout>
    );
  }
}

const HeaderInput = styled.input`
  font-family: Inconsolata;
  font-size: 34pt;
  border-color: transparent;
  background: inherit;
  color: white;
  /* background: ${props => props.color}; */
  :focus{
      outline: none;
  }
`;

const WriteTagLayout = styled.div`
  /* align-items: "center"; */
`;

export default WriteTags;
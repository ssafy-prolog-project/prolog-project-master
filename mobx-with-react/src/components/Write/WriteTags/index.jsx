import React, { Component } from "react";
import styled from "styled-components";

import TagEditor from "react-tageditor";
import "react-tageditor/dist/style/default.css"; //css바꾸고 싶으면 저기서 바꾸거나 가져와서 바꾸면 됨.

class WriteTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.tagList
    };
    this.handleTagsChange = this.handleTagsChange.bind(this);
  }

  handleTagsChange(tagsChanged, allTags, action) {
    this.props.changeTags(allTags);
  }

  render() {
    return (
      <WriteTagLayout>
        <TagEditor
          ref="tagEditor"
          tags={this.state.tags}
          delimiters={[13, ","]} //13은 enter
          placeholder="태그를 입력해주세요."
          onChange={this.handleTagsChange}
        />
      </WriteTagLayout>
    );
  }
}

const WriteTagLayout = styled.div`
  /* align-items: "center"; */
`;

export default WriteTags;

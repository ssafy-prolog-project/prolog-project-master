import React, { Component } from "react";
import {
  ImageIcon,
  VideoIcon,
  AudioIcon,
  PaperclipIcon,
  LocationIcon,
  AlignLeftIcon
} from "../../../styles/iconStyle.js";
import styled from "styled-components";

export default class EditorHelper extends Component {
  // state = {
  //   editorState: createEditorStateWithText(text),
  // };

  // onChange = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // };

  // focus = () => {
  //   this.editor.focus();
  // };

  render() {
    return (
      <EditorHelperLayout>
        <ImageIcon onClick={this.props.onClickInsertImage} color="black"/>
        <ImageIcon onClick={this.props.onClickImageUpload} color="red" />
        <ImageIcon onClick={this.props.onClickHorizontalLine} color="blue" />
        <VideoIcon onClick={this.props.onClickInsertMedia}/>
        
        {/* <PaperclipIcon />
        <LocationIcon />
        <AlignLeftIcon /> */}
      </EditorHelperLayout>
    );
  }
}

const EditorHelperLayout = styled.div`
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: text;
  padding: 16px;
  border-radius: 2px;
  margin-bottom: 2em;
  box-shadow: inset 0px 1px 8px -3px #ababab;
  background: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

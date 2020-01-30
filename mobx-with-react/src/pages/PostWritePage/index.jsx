import React from "react";
import { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";

// @inject("testStore")
// @observer
class PostWritePage extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  draftsave = () => {
    const contentState = this.state.editorState.getCurrentContent();
    console.log("content state", convertToRaw(contentState));
    // this.setState({
    //   editorState
    // });
  };

  draftload = () => {
    //const loadContents = this.props.testStore.quillbody;
    //this.quillRef.getEditor().setContents(loadContents);
  };
  onChange = editorState => {
    this.setState({ editorState });
  };
  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };
  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };

  onToggleCode = () => {
    this.onChange(RichUtils.toggleCode(this.state.editorState));
  };
  render() {
    return (
      <div>
        <div
          id="draftEditor"
          style={{
            paddingTop: "100px",
            height: "400"
          }}
        >
          <button onClick={this.onUnderlineClick}>Underline</button>
          <button onClick={this.onToggleCode}>Code Block</button>
          <Editor
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
          />
          <button onClick={this.draftsave}>Save</button>
          <button onClick={this.draftload}>Load</button>
        </div>
      </div>
    );
  }
}

export default PostWritePage;

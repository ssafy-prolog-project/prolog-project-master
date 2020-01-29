import React from "react";
import ReactQuill, { Quill } from "react-quill";
import { ImageUploader } from "quill-image-upload";
import "react-quill/dist/quill.snow.css";
import { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

export const RQuill = styled(ReactQuill)`
  width: 80%;
  height: 100 %;
  cursor: pointer;
`;

@inject("testStore")
@observer
class PostWritePage extends Component {
  state = {
    quillbody: "",
    draftbody: "",
    quillmodules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["bold", "italic", "underline"],
        ["image", "video", "code-block"]
      ]
    },
    quillformats: [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "video"
    ]
  };

  quillchangeEditor = e => this.setState({ quillbody: e });

  quillsave = () => {
    var contents = this.quillRef.getEditor().getContents();
    console.log(contents);
    this.props.testStore.quillbody = contents;
    console.log(this.state.quillbody);
  };

  quillload = () => {
    const loadContents = this.props.testStore.quillbody;
    this.quillRef.getEditor().setContents(loadContents);
  };

  render() {
    return (
      <div>
        <div id="quillEditor">
          <ReactQuill
            name="editor"
            ref={el => (this.quillRef = el)}
            value={this.state.quillbody} // state 값
            onChange={this.quillchangeEditor}
            modules={this.quillmodules}
            formats={this.quillformats}
            placeholder={"아무거나 입력해 주세요"}
          />
          <button onClick={this.quillsave}>Save</button>
          <button onClick={this.quillload}>Load</button>
        </div>

        <div id="draftEditor"></div>
      </div>
    );
  }
}

export default PostWritePage;

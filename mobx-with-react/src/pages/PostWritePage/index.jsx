import React from "react";
import ReactQuill, { Quill } from "react-quill";
import { ImageUploader } from "quill-image-upload";
import "react-quill/dist/quill.snow.css";
import { Component } from "react";
import styled from "styled-components";

export const RQuill = styled(ReactQuill)`
  width: 80%;
  height: 100                                                                                                                                                                                                                                                                                                                                                                         %;

  cursor: pointer;
`;

class PostWritePage extends Component {
  state = {
    body: "",
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4] }],
        ["bold", "italic", "underline"],
        ["image", "code-block"]
      ]
    }
    //   formats = [
    //     'header', 'font', 'size',
    //     'bold', 'italic', 'underline', 'strike', 'blockquote',
    //     'list', 'bullet', 'indent',
    //     'link', 'image', 'video'
    //   ]
  };

  changeEditor = e => this.setState({ body: e });

  render() {
    return (
      <RQuill
        ref={el => (this.quillRef = el)}
        value={this.state.body} // state 값
        onChange={this.changeEditor}
        modules={this.modules}
        formats={this.formats}
        placeholder={"아무거나 입력해 주세요"}
      />
    );
  }
}

export default PostWritePage;

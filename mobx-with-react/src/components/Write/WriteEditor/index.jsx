import React, { Component } from "react";
import styled from "styled-components";
import CKEditor from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
// import * as BalloonEditor  from '../../../ckeditor5-build-balloon/build/ckeditor.js';
//const BalloonEditor = require('../../../ckeditor5-build-balloon')
//import BalloonEditor from '../../../ckeditor5-build-balloon/build/ckeditor.js'
import "../../../styles/content-style.css";
import EditorHelper from "../EditorHelper";
// const aa = require('./build/ckeditor.js')
{
  /* <script src='../../../ckeditor5-build-balloon/build/ckeditor.js'></script> */
}

export default class WriteEditor extends Component {
  state = {
    data1: "",
    ckeditor: undefined
  };

  constructor(props) {
    super(props);
  }

  createMarkup = () => {
    return { __html: this.state.data1 };
  };

  render() {
    return (
      <WriteEditorLayout>
        <TestContainer>
          <div></div>
          <EditorLayout id="editor">
            <CKEditor
              editor={BalloonEditor}
              data=""
              //config={}
              onInit={editor => {
                //console.log(Balloon Editor.builtinPlugins.map(plugin => plugin.pluginName))
                this.setState({ ckeditor: editor });
              }}
              onChange={(event, editor) => {
                this.setState({ data1: editor.getData() });
                this.props.setBody(editor.getData());
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </EditorLayout>
          <div>
            <EditorHelper editor={this.state.ckeditor} />
          </div>
        </TestContainer>

        <TestContainer>
          <div></div>
          <EditorLayout>
            <div
              className="ck-content"
              dangerouslySetInnerHTML={this.createMarkup()}
            />
          </EditorLayout>
          <div></div>
        </TestContainer>
      </WriteEditorLayout>
    );
  }
}

const EditorLayout = styled.div`
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: text;
  padding: 16px;
  border-radius: 2px;
  margin-bottom: 2em;
  box-shadow: inset 0px 1px 8px -3px #ababab;
  background: #fefefe;
  min-height: 25rem;
`;

const TestContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;

const WriteEditorLayout = styled.div``;

import React, { Component } from 'react';
import styled from 'styled-components';
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
//import {BalloonEditor}  from '../../../ckeditor5-build-balloon/build/ckeditor.js';
import "../../../styles/content-style.css";
import EditorHelper from "../EditorHelper";


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
          <EditorLayout>
            <CKEditor
              editor={BalloonEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onInit={editor => {
                //console.log(Balloon Editor.builtinPlugins.map(plugin => plugin.pluginName))
                //console.log(Array.from(editor.ui.componentFactory.nameS()))
                // You can store the "editor" and use when it is needed.
                //console.log(Array.<String|module:font/fontfamily~FontFamilyOption>)
                console.log("Editor is ready to use!", editor);
                this.setState({ ckeditor: editor });
              }}
              onChange={(event, editor) => {
                // const data = editor.getData();
                // console.log( { event, editor, data } );
                this.setState({ data1: editor.getData() });
                this.props.setBody(editor.getData());
              }}
              onBlur={(event, editor) => {
                //console.log( 'Blur.', editor );
                //const data = editor.getData();
                //console.log( { event, editor, data } );
              }}
              onFocus={(event, editor) => {
                //console.log( 'Focus.', editor );
              }}
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

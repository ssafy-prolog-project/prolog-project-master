import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import styled from 'styled-components'
import { KakaoTalk} from 'styled-icons/remix-fill/KakaoTalk'
import { Github} from 'styled-icons/boxicons-logos/Github'
import {Google} from 'styled-icons/boxicons-logos/Google'

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const text = 'In this editor a toolbar shows up once you select part of the text …';


export default class PostWriter extends Component {

  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div>
        <KakaoTalk style={{backgroundColor:"yellow", color:"black", height:"200px"}}></KakaoTalk>
        <Github style={{backgroundColor:"yellow", color:"black", height:"200px"}}></Github>
        <Google style={{backgroundColor:"yellow", color:"black", height:"200px"}}></Google>
        
        
        
      <EditorLayout onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
        <InlineToolbar />
      </EditorLayout>
      </div>
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
  box-shadow: inset 0px 1px 8px -3px #ABABAB;
  background: #fefefe;
`

// const
// .editor :global(.public-DraftEditor-content) {
//   min-height: 140px;
// }
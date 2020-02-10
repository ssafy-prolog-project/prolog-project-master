import EditorHelper from "../EditorHelper";
import HeadlinesButton from "../HeadlinesButton"

import React, { Component } from "react";
import styled from "styled-components";

import { convertFromRaw, EditorState } from "draft-js";
import Editor, {
  composeDecorators,
  createEditorStateWithText
} from "draft-js-plugins-editor";
//에디터에 필요한 플러그인
import createHashtagPlugin from "draft-js-hashtag-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
import createImagePlugin from "draft-js-image-plugin";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createResizeablePlugin from "draft-js-resizeable-plugin";
import createBlockDndPlugin from "draft-js-drag-n-drop-plugin";
//import createDragNDropUploadPlugin from 'draft-js-drag-n-drop-upload-plugin'
import createInlineToolbarPlugin, { Separator} from "draft-js-inline-toolbar-plugin";

import "draft-js-hashtag-plugin/lib/plugin.css";
import "draft-js-linkify-plugin/lib/plugin.css";
import "draft-js-image-plugin/lib/plugin.css";
import "draft-js-alignment-plugin/lib/plugin.css";
import "draft-js-focus-plugin/lib/plugin.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";

import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';

//import css
//import mockUpload from './mockUpload'

const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin({
  component: (props) => (
    <a {...props} onClick={() => alert('Clicked on Link!')}/>
  )
});
const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);

const imagePlugin = createImagePlugin({ decorator });

// const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
//   handleUpload: mockUpload,
//   addImage: imagePlugin.addImage,
// });

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [
  // dragNDropFileUploadPlugin,
  blockDndPlugin,
  focusPlugin,
  linkifyPlugin,
  hashtagPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin,
  inlineToolbarPlugin
];

const initialState = {
  entityMap: {
    "0": {
      type: "IMAGE",
      mutability: "IMMUTABLE",
      data: {
        src: "https://support.apple.com/content/dam/edam/applecare/images/en_US/repair/applecare-products_2x.png"
      }
    }
  },
  blocks: [
    {
      key: "9gm3s",
      text:
        "You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "ov7r",
      text: " ",
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0
        }
      ],
      data: {}
    },
    {
      key: "e23a8",
      text: "See advanced examples further down …",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ]
};

export default class WriteEditor extends Component {
  state = {
    editorState: EditorState.createWithContent(convertFromRaw(initialState))
  };

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <WriteEditorLayout>
        <div></div>
        <div>
          <EditorLayout style={{ height: "500px" }} onClick={this.focus}>
            <Editor
              editorState={this.state.editorState}
              onChange={this.onChange}
              plugins={plugins}
              ref={element => {
                this.editor = element;
              }}
            />
            <InlineToolbar>
              {
                (externalProps) => (
                  <>
                    <BoldButton {...externalProps} />
                    <ItalicButton {...externalProps} />
                    <UnderlineButton {...externalProps} />
                    <CodeButton {...externalProps} />
                    <Separator {...externalProps} />
                    <HeadlinesButton {...externalProps} />
                    <UnorderedListButton {...externalProps} />
                    <OrderedListButton {...externalProps} />
                    <BlockquoteButton {...externalProps} />
                    <CodeBlockButton {...externalProps} />
                  </>
                )
              }
            </InlineToolbar>
            <AlignmentTool />
          </EditorLayout>
        </div>
        <div>
          <EditorHelper></EditorHelper>
        </div>
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
`;

// const
// .editor :global(.public-DraftEditor-content) {
//   min-height: 140px;
// }

const WriteEditorLayout = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;

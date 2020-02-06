import React, { Component } from "react";
import styled from "styled-components";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import "./index.css";
import { Underline } from "styled-icons/boxicons-regular/Underline";
import { CodeBlock } from "styled-icons/boxicons-regular/CodeBlock";
import { FormatBold } from "styled-icons/material/FormatBold";
import { FormatItalic } from "styled-icons/material/FormatItalic";
import { Link } from "styled-icons/boxicons-regular/Link";
import { TextSize } from "styled-icons/octicons/TextSize";
import { FormatQuote } from "styled-icons/material/FormatQuote";
import { ListUnordered } from "styled-icons/octicons/ListUnordered";
import { ListOrdered } from "styled-icons/octicons/ListOrdered";

export const ListOrderedIcon = styled(ListOrdered)`
  cursor: pointer;
  width: 30px;
`;

export const ListUnorderedIcon = styled(ListUnordered)`
  cursor: pointer;
  width: 30px;
`;

export const FormatQuoteIcon = styled(FormatQuote)`
  cursor: pointer;
  width: 30px;
`;

export const TextSizeIcon = styled(TextSize)`
  cursor: pointer;
  width: 30px;
`;

export const LinkIcon = styled(Link)`
  cursor: pointer;
  width: 30px;
`;

export const ItalicIcon = styled(FormatItalic)`
  cursor: pointer;
  width: 30px;
`;

export const BoldIcon = styled(FormatBold)`
  cursor: pointer;
  width: 30px;
`;
export const UnderlineIcon = styled(Underline)`
  cursor: pointer;
  width: 30px;
`;

export const CodeBlockIcon = styled(CodeBlock)`
  cursor: pointer;
  width: 30px;
`;

class PostWrite extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
      showLinkInput: false
    };
  }
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

  onLinkClick = () => {
    this.setState({
      showLinkInput: true
    });
  };

  onLinkInputClose = () => {
    this.setState({
      showLinkInput: false
    });
  };

  onToggleCode = () => {
    this.onChange(RichUtils.toggleCode(this.state.editorState));
  };

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };
  onH1Click = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-one")
    );
  };
  onH2Click = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-two")
    );
  };
  onH3Click = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-three")
    );
  };
  onH4Click = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-four")
    );
  };
  onH5Click = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-five")
    );
  };
  onH6Click = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-six")
    );
  };

  onBlockquoteClick = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "blockquote")
    );
  };

  onUlClick = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "unordered-list-item")
    );
  };

  onOlClick = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "ordered-list-item")
    );
  };

  onCodeClick = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "code-block")
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <PostWriteLayout>
        <TextPlugin>
          <TIcons>
            <UnderlineIcon onClick={this.onUnderlineClick}></UnderlineIcon>
          </TIcons>
          <TIcons>
            <BoldIcon onClick={this.onBoldClick}></BoldIcon>
          </TIcons>
          <TIcons>
            <ItalicIcon onClick={this.onItalicClick}></ItalicIcon>
          </TIcons>
          <TIcons>
            <CodeBlockIcon onClick={this.onCodeClick}></CodeBlockIcon>
          </TIcons>
          <TIcons>
            <TextSizeIcon onClick={this.onH1Click}></TextSizeIcon>
          </TIcons>
          <TIcons>
            <TextSizeIcon onClick={this.onH2Click}></TextSizeIcon>
          </TIcons>
          <TIcons>
            <TextSizeIcon onClick={this.onH3Click}></TextSizeIcon>
          </TIcons>
          <TIcons>
            <TextSizeIcon onClick={this.onH4Click}></TextSizeIcon>
          </TIcons>
          <TIcons>
            <TextSizeIcon onClick={this.onH5Click}></TextSizeIcon>
          </TIcons>
          <TIcons>
            <TextSizeIcon onClick={this.onH6Click}></TextSizeIcon>
          </TIcons>
          <TIcons>
            <FormatQuoteIcon onClick={this.onBlockquoteClick}></FormatQuoteIcon>
          </TIcons>
          <TIcons>
            <ListUnorderedIcon onClick={this.onUlClick}></ListUnorderedIcon>
          </TIcons>
          <TIcons>
            <ListOrderedIcon onClick={this.onOlClick}></ListOrderedIcon>
          </TIcons>
        </TextPlugin>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          placeholder="내용을 입력해주세요..."
          ref="editor"
          spellCheck="true"
        />
        <PluginSpace>
          <Icons>
            <CodeBlockIcon onClick={this.onToggleCode}></CodeBlockIcon>
          </Icons>

          <Icons>
            <LinkIcon onClick={this.onLinkClick}></LinkIcon>
          </Icons>
        </PluginSpace>
        {/* <SaveBtn onClick={this.draftsave}>Save</SaveBtn>
                <LoadBtn onClick={this.draftload}>Load</LoadBtn> */}
      </PostWriteLayout>
    );
  }
}

const TextPlugin = styled.div`
  width: 500px;
  height: 35px;
  background-color: #f2f2f2;
`;

const TIcons = styled.div`
  align-content: center;
  width: 35px;
  float: left;
  :hover {
    opacity: 50%;
  }
`;
const PostWriteLayout = styled.div`
  background-color: white;
`;

const PluginSpace = styled.div`
  float: right;
  width: 40px;
  height: 10rem;
  background-color: white;
  margin-top: 6rem;
  margin-right: 10%;
`;
const Icons = styled.div`
  width: 30px;
  float: right;
  margin-top: 2rem;
  :hover {
    opacity: 50%;
  }
`;
const SaveBtn = styled.button``;

const LoadBtn = styled.button``;

export default PostWrite;

import React, { Component } from "react";
import styled from "styled-components";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import './index.css';
import { Underline} from "styled-icons/boxicons-regular/Underline";
import { CodeBlock } from "styled-icons/boxicons-regular/CodeBlock";
import { FormatBold } from "styled-icons/material/FormatBold";
import { FormatItalic } from "styled-icons/material/FormatItalic";
import { Link } from "styled-icons/boxicons-regular/Link";

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
      onChange = (editorState) => {
        this.setState({ editorState });
      };
      handleKeyCommand = (command) => {

        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
          this.onChange(newState);
          return 'handled';
        }
        return 'not-handled';
      }
      onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
      }
    
      onLinkClick = () => {
        this.setState({
          showLinkInput: true
        });
      }
      
      onLinkInputClose = () => {
        this.setState({
          showLinkInput: false
        });
      }

      onToggleCode = () => {
        this.onChange(RichUtils.toggleCode(this.state.editorState));
      }

      onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
      }
      onItalicClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
  }
    
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
display: none;

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
const SaveBtn = styled.button`
    
`;


const LoadBtn = styled.button`
    
`;


export default PostWrite;
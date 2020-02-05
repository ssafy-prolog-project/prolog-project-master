import React, { Component } from "react";
import styled from "styled-components";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import './index.css';
import { Underline} from "styled-icons/boxicons-regular/Underline";
import { CodeBlock } from "styled-icons/boxicons-regular/CodeBlock";
import { FormatBold } from "styled-icons/material/FormatBold";
import { FormatItalic } from "styled-icons/material/FormatItalic";

export const ItalicIcon = styled(FormatItalic)`
cursor: pointer;
  width: 40px;
`;

export const BoldIcon = styled(FormatBold)`
cursor: pointer;
  width: 40px;
`;
export const UnderlineIcon = styled(Underline)`
   cursor: pointer;
  width: 40px;
`;

export const CodeBlockIcon = styled(CodeBlock)`
cursor: pointer;
  width: 40px;
`;

class PostWrite extends Component {
    constructor() {
        super();
        this.state = {
          editorState: EditorState.createEmpty(),
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
              
           
                <Editor
                  editorState={this.state.editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  onChange={this.onChange}
                  placeholder="내용을 입력해주세요..."
                />
                <PluginSpace>
                    <Icons>
                    <UnderlineIcon onClick={this.onUnderlineClick}></UnderlineIcon>
                
                    </Icons>
                    <Icons>
                        <CodeBlockIcon onClick={this.onToggleCode}></CodeBlockIcon>
                    </Icons>
                    <Icons>
                        <BoldIcon onClick={this.onBoldClick}></BoldIcon>
                    </Icons>
                    <Icons>
                        <ItalicIcon onClick={this.onItalicClick}></ItalicIcon>
                    </Icons>
                
                </PluginSpace>
                {/* <SaveBtn onClick={this.draftsave}>Save</SaveBtn>
                <LoadBtn onClick={this.draftload}>Load</LoadBtn> */}
             
            </PostWriteLayout>
          );

        
      }
      
}




const PostWriteLayout = styled.div`
    
`;


const PluginSpace = styled.div`
    float: right;
    width: 4rem;
    height: 10rem;
    background-color: white;
    margin-top: 6rem;
    margin-right: 10%;
`;
const Icons = styled.div`

    width: 40px;
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
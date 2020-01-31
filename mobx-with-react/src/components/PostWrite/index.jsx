import React, { Component } from "react";
import styled from "styled-components";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import './index.css';
import { Underline} from "styled-icons/boxicons-regular/Underline";
import { CodeBlock } from "styled-icons/boxicons-regular/CodeBlock";

export const UnderlineIcon = styled(Underline)`
   width: 60%;
   height: 60%;
   margin: 20% 20% 20% 20%;
`;

export const CodeBlockIcon = styled(CodeBlock)`
width: 60%;
   height: 60%;
   margin: 20% 20% 20% 20%;
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
    float: left;
    width: 5%;
    height: 80%;
    background-color: white;
    margin-top: 10%;
`;


const SaveBtn = styled.button`
    
`;

const Icons = styled.div`
    height: 10%;
    :hover {
        opacity: 50%;
        background-color: gray
  }
`;

const LoadBtn = styled.button`
    
`;


export default PostWrite;
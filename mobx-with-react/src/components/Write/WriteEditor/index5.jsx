import React, {useState, setState} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const focusEditor = <Editor
toolbarClassName="demo-toolbar-absolute"
wrapperClassName="demo-wrapper"
editorClassName="demo-editor"
toolbarOnFocus
toolbar={{
  options: ['inline', 'blockType', 'fontSize', 'fontFamily'],
  inline: {
    options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
    bold: { className: 'bordered-option-classname' },
    italic: { className: 'bordered-option-classname' },
    underline: { className: 'bordered-option-classname' },
    strikethrough: { className: 'bordered-option-classname' },
    code: { className: 'bordered-option-classname' },
  },
  blockType: {
    className: 'bordered-option-classname',
  },
  fontSize: {
    className: 'bordered-option-classname',
  },
  fontFamily: {
    className: 'bordered-option-classname',
  },
}}
/>


const PostWrite = () => {
    const [index, setIndex] = useState(0);
    const addEditor = () => {
        setIndex(index + 1)
    }

    return(
        <div id="page">
            <button onClick={addEditor}>+</button>
            <p>{index}</p>
            <div style={{backgroundColor: "lightblue"}}>
            <Editors index={index}></Editors>
            </div>
            
        </div>
    )
}

const Editors = (props) => {
    return(
        <div>
        {[...Array(props.index).keys()].map((index) => (
            <Editor wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbarOnFocus
            localization={{
              locale: 'ko',
            }} key={index}  />
          ))}
          </div>    
    )
}

export default PostWrite;
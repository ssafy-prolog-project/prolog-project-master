import React, { Component } from 'react';
import styled from 'styled-components';
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
//import BalloonEditor from '../../../ckeditor5-build-balloon';


export default class WriteEditor extends Component {
  
  
  render() {
    return (
        <WriteEditorLayout>
          <div></div>
          <EditorLayout>

            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ BalloonEditor }
                data="<p>Hello from CKEditor 5!</p>"
                onInit={ editor => {
                  //console.log(Balloon Editor.builtinPlugins.map(plugin => plugin.pluginName))
                  //console.log(Array.from(editor.ui.componentFactory.nameS()))
                  // You can store the "editor" and use when it is needed.
                    //console.log(Array.<String|module:font/fontfamily~FontFamilyOption>)
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
            </EditorLayout>
            <div></div>
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



const WriteEditorLayout = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;

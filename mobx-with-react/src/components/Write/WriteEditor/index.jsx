import React, { Component } from 'react';
import styled from 'styled-components';
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
//import BalloonEditor from '../../../ckeditor5-build-balloon';
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

  //from url
  onClickInsertMedia = () => {
    //this.state.ckeditor.command('imageUpload')
    //this.state.ckeditor.execute('imageInsert')

    this.state.ckeditor.execute("mediaEmbed", "https://youtu.be/mc2e7vNZNEs");
    //   this.listenTo( this.state.ckeditor.editing.view.document, 'clipboardInput', ( evt, data ) => {
    //     // Assuming that only images were pasted:
    //     const images = Array.from( data.dataTransfer.files );

    //     // Upload the first image:
    //     //this.state.ckeditor.execute( 'imageUpload', { file: images[ 0 ] } );

    // } );
  };

  onClickInsertImage = () => {
    //console.log(this.state.ckeditor.commands);
    var selection = this.state.ckeditor.model.document.selection;
    console.log(selection)
    console.log(Array.from(selection.getSelectedBlocks()))
    console.log(selection.anchor)
    console.log(selection.focus)

    this.state.ckeditor.execute("imageInsert", {
      source:
        "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/2Y5/image/ScuGzfGLXhYGmB0P2CZ1RgCrPDQ.jpg"
    });
    //텍스트 넣는방법
    //this.state.ckeditor.execute('input', { text: 'foo' });
    //this.state.ckeditor.execute('input', 35);
    //현재 선택되어 있는 요소
    var selection = this.state.ckeditor.model.document.selection;
    console.log(selection)
    console.log(Array.from(selection.getSelectedBlocks()))
    console.log(selection.anchor)
    console.log(selection.focus)
    //selection.setFocus(null)
    //this.state.ckeditor.editing.view.change(writer =>
      //writer.insertText( 'foo')
      //console.log(writer.document)
      //writer.document.selection.setTo(null)
      //writer.selection.setTo(null)
      //)
      this.state.ckeditor.execute('input', { text: 'foo' });
    
    //selection.setFocus(selection.getLastPosition())
    
  };

  onClickImageUpload = () => {
    //this.state.ckeditor.execute( 'imageInsert', { source: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/2Y5/image/ScuGzfGLXhYGmB0P2CZ1RgCrPDQ.jpg' } );
  };

  onClickHorizontalLine = () => {
    this.state.ckeditor.execute( 'horizontalLine' );
  }

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
            <button onClick={this.onClickInsertImage}>가나다</button>
            <EditorHelper style={{position:"float"}}
              onClickInsertMedia={this.onClickInsertMedia}
              onClickInsertImage={this.onClickInsertImage}
              onClickImageUpload={this.onClickImageUpload}
              onClickHorizontalLine={this.onClickHorizontalLine}
            ></EditorHelper>
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
`;

const TestContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;

const WriteEditorLayout = styled.div``;

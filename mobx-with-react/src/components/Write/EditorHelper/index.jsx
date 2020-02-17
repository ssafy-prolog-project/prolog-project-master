import React, { Component } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

import {
  ImageIcon,
  ImageAddIcon,
  VideoIcon,
  HorizontalLineIcon,
} from "../../../styles/iconStyle.js";

export default class EditorHelper extends Component {
  state = {
    imageUrl: "",
    mediaUrl: ""
  };

  mediaUrlChange = e => {
    this.setState({ mediaUrl: e.target.value });
  };

  imageUrlChange = e => {
    this.setState({ imageUrl: e.target.value });
  };

  onClickInsertMedia = () => {
    //TODO: 동영상 주소가 맞는지 처리해주는 로직
    if (this.state.mediaUrl !== "") {
      this.props.editor.execute("mediaEmbed", this.state.mediaUrl);
      this.setState({ mediaUrl: "" });
    }
  };

  onClickInsertImage = () => {
    //TODO: 이미지 주소가 맞는지 처리해주는 로직
    if (this.state.mediaUrl !== "") {
      this.props.editor.execute("imageInsert", { source: this.state.imageUrl });
      this.setState({ imageUrl: "" });
    }
    // multi
    //   editor.execute( 'imageInsert', {
    //     source:  [
    //         'path/to/image.jpg',
    //         'path/to/other-image.jpg'
    //     ]
    // } );
  };

  onClickImageUpload = () => {
    //this.props.editor.execute(( 'imageUpload', new ImageUploadCommand(this.props.editor  ) ));
    console.log(this.props.editor);
    console.log(Array.from(this.props.editor.ui.componentFactory.names()));
    ///console.log(this.props.editor.ui.componentFactory.get("imageUpload"))
    //   // console.log(this.props.editor.commands.get("imageUpload"))
    //console.log(this.props.editor.plugins);
    console.log(this.props.editor.plugins.get("ImageUpload"));

    //   console.log(this.props.editor.plugins.get("FileRepository"))
    //   console.log(this.props.editor.plugins.get("SimpleUpload"))
    //   console.log(this.props.editor.editing)
    //   let adapter= this.props.editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
    //     return new this.props.editor.plugins.get("SimpleUpload")( loader );
    // };

    // this.props.editor.plugins.get("SimpleUpload").upload()
    //this.props.editor.execute( 'imageUpload', { file: "frame6.jpg" } );

    //   this.props.editor.commands["imageUpload"].listenTo( this.props.editor.editing.view.document, 'clipboardInput', ( evt, data ) => {
    //     // Assuming that only images were pasted:
    //     const images = Array.from( data.dataTransfer.files );

    //     // Upload the first image:
    //     this.props.editor.execute( 'imageUpload', { file: images[ 0 ] } );
    // } );

    // console.log(this.props.editor.commands);

    // this.props.editor.execute("imageInsert", {
    //   source:
    //     "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/2Y5/image/ScuGzfGLXhYGmB0P2CZ1RgCrPDQ.jpg"
    // });
  };

  onClickHorizontalLine = () => {
    this.props.editor.execute("horizontalLine");
  };

  render() {
    return (
      <EditorHelperLayout>
        <ImageAddIcon onClick={this.onClickImageUpload}/>
        <HorizontalLineIcon onClick={this.onClickHorizontalLine} />
        <Popup
          onClose={this.onClickInsertImage}
          trigger={open => (
            <ImageIcon color="black">
              Trigger - {open ? "Opened" : "Closed"}
            </ImageIcon>
          )}
          position="left center"
          closeOnDocumentClick
        >
          <span>InsertImage url</span>
          <input placeholder="http://" onChange={this.imageUrlChange}></input>
        </Popup>
        <Popup
          onClose={this.onClickInsertMedia}
          trigger={open => (
            <VideoIcon>Trigger - {open ? "Opened" : "Closed"}</VideoIcon>
          )}
          position="left center"
          closeOnDocumentClick
        >
          <span>InsertMedia url</span>
          <input placeholder="http://" onChange={this.mediaUrlChange}></input>
        </Popup>
      </EditorHelperLayout>
    );
  }
}

const EditorHelperLayout = styled.div`
  /* box-sizing: border-box; */
  /* border: 1px solid #ddd; */
  /* border-radius: 2px;
  margin-bottom: 2em; */
  /* box-shadow: inset 0px 1px 8px -3px #ababab; */
  margin-top: 3em;
  background: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

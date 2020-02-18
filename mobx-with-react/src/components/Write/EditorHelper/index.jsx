import React, { Component } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

import {
  ImageIcon,
  // ImageAddIcon,
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

  // onClickImageUpload = () => {
  //   //this.props.editor.execute(( 'imageUpload', new ImageUploadCommand(this.props.editor  ) ));
  //   //console.log(Array.from(this.props.editor.ui.componentFactory.names()));
  //   //console.log(this.props.editor.plugins);
  //   //console.log(this.props.editor.plugins.get("ImageUpload"));
  //   //   console.log(this.props.editor.editing)
  // };

  onClickHorizontalLine = () => {
    this.props.editor.execute("horizontalLine");
  };

  render() {
    return (
      <EditorHelperLayout>
        {/* <ImageAddIcon onClick={this.onClickImageUpload}/> */}
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
  cursor: text;
  padding: 16px;
  border-radius: 2px;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

import React, { Component, useState } from "react";
import WriteTopBar from "../../components/Write/WriteTopBar";
import WriteEditor from "../../components/Write/WriteEditor";
import WriteTags from "../../components/Write/WriteTags";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

@inject("editorStore", "userStore")
@withRouter
@observer
class PostWritePage extends Component {
  state = {
    tagInput: ""
  };

  componentWillMount() {
    this.props.editorStore.setPostId(this.props.match.params.id);
  }

  componentDidMount() {
    this.props.editorStore.loadInitialData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.editorStore.setPostIf(this.props.match.params.id);
      this.props.editorStore.loadInitialData();
    }
  }

  changeTitle = e => this.props.editorStore.setTitle(e.target.value);
  changeDescription = e =>
    this.props.editorStore.setDescription(e.target.value);
  changeBody = e => this.props.editorStore.setBody(e.target.value);
  changeTagInput = e => this.setState({ tagInput: e.target.value });

  handleTagInputKeyDown = ev => {
    switch (ev.keyCode) {
      case 13: // Enter
      case 9: // Tab
      case 188: // ,
        if (ev.keyCode !== 9) ev.preventDefault();
        this.handleAddTag();
        break;
      default:
        break;
    }
  };

  handleAddTag = () => {
    if (this.state.tagInput) {
      this.props.editorStore.addTag(this.state.tagInput.trim());
      this.setState({ tagInput: "" });
    }
  };

  handleRemoveTag = tag => {
    if (this.props.editorStore.inProgress) return;
    this.props.editorStore.removeTag(tag);
  };

  save = ev => {
    ev.preventDefault();
    const { editorStore } = this.props;
    editorStore.save()
    // .then(post => {
    //   editorStore.reset();
    //   this.props.history.replace(`/post/${post.id}`);
    // });
  };

  render() {
    const { inProgress, errors, title, description, body, tagList } = this.props.editorStore;



    return (
      <PostWritePageLayout>
        <WriteTopBar title={title} changeTitle={this.changeTitle} save={this.save}></WriteTopBar>
        <WriteEditor></WriteEditor>
        <div>
          <WriteTags/>
        </div>
      </PostWritePageLayout>
    );
  }
}

const PostWritePageLayout = styled.div`
  height: 100%;
`;

export default PostWritePage;

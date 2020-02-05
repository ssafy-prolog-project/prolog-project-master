import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

// component
import Logo from "../../components/NavBar/Logo";
import UserButton from "../../components/Common/UserButton";
import PostMeta from "../../components/Post/PostMeta";
import PostDetail from "../../components/Post/PostDetail";
import PostTags from "../../components/Post/PostTags";
import PostComments from "../../components/Post/PostComments";
import PostActions from "../../components/Post/PostActions";

@inject("postStore", "userStore")
@withRouter
@observer
class PostDetailPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.postStore.loadPost(id, { acceptcached: true });
    // comment 정보들 불러오기
    // this.props.commentsStore.setArticleSlug(slug);
    // this.props.commentsStore.loadComments();
  }

  handleDeletePost = id => {
    this.props.postStore.deletePost(id);
    // 글을 지운다. 나만 가능
    //.then(() => this.props.history.replace('/'))
  };

  //댓글 삭제 해당 글 쓴 사람만 가능
  // handleDeleteComment = id => {
  //   this.props.commentStore.deleteComment(id)
  // }

  render() {
    const id = this.props.match.params.id;
    const { currentUser } = this.props.userStore;
    //커멘트 관련 내용 추가
    const post = this.props.postStore.getPost(id);
    if (!post) return <h1>Post가 없습니다. 에러처리</h1>;

    const canModify = currentUser && currentUser.name === post.author.username;

    //author는 유저정보가 들어오고 클래스여야한다.

    return (
      <PostDetailPageLayout>
        <PostViewHeader>
          <Logo></Logo>
          <div></div>
          <UserButton></UserButton>
        </PostViewHeader>
        <PostContentWrapper>
          <div>Left</div>
          <PostContent>
            <PostMeta
              post={post}
              canModify={canModify}
              onDelete={this.handleDeletePost}
            ></PostMeta>
            <PostDetail postid={id}></PostDetail>
            <PostTags></PostTags>
            <hr></hr>
            <PostActions></PostActions>
            <PostComments></PostComments>
          </PostContent>
          <div>Right</div>
        </PostContentWrapper>
      </PostDetailPageLayout>
    );
  }
}

export default PostDetailPage;

const PostDetailPageLayout = styled.div`
  height: 100vh;
  display: grid;

  /* grid-template-columns: 15% 70% 15% */
  /* grid-template-areas: "nav content"; */
`;

//TODO 얘는 그리드말고 나중에 flex로 양방향 쪼개기 하면 될듯
const PostViewHeader = styled.div`
  grid-template-columns: 10% 80% 10%;
  grid-template-areas: "nav content";
  height: 17vh;
  display: grid;
  background-color: #1a3365;
`;

const PostContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;

const PostContent = styled.div`
  /* grid-template-columns: auto; */
  /* overflow-y: scroll; */
  /* display: grid; */
`;

const CenterAreaLayout = styled.div`
  grid-template-columns: auto;
  height: 70vh;
  display: grid;
`;

import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

@inject("postStore", "userStore", "commentStore", "authStore")
// @withRouter
@observer
class PostDetailPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.postStore.loadPost(id, { acceptcached: true });
    // store에 커멘트 id를 저장한 다음에 커멘트를 불러온다.
    this.props.commentStore.setPostId(id);
    //this.props.commentStore.loadComments();
  }

  handleDeletePost = id => {
    // 글을 지운다. 나만 가능
    this.props.postStore.deletePost(id).
    then(() => this.props.history.replace('/'))
  };

  //댓글 삭제 해당 글 쓴 사람만 가능
  handleDeleteComment = id => {
    this.props.commentStore.deleteComment(id);
  };

  createMarkup = () => {
    return { __html: this.props.postStore.detailPost.body };
  };
  
  render() {
    const id = this.props.match.params.id;
    //const { currentUser } = this.props.userStore;
    const currentUser = true;
    const { comments } = this.props.commentStore;
    this.props.postStore.getPost(id);
    //const post = this.props.postStore.detailPost;
    if (!this.props.postStore.detailPost) return <h1>Post가 없습니다. 에러처리</h1>;
console.log(this.props.postStore.detailPost);
    const canModify = currentUser && currentUser.name === this.props.postStore.detailPost.userName;

    //author는 유저정보가 들어오고 클래스여야한다.
    const { values } = this.props.authStore;
  
    const post = this.props.postStore.detailPost;
    console.log("ㅠㅠㅠㅠㅠ" + post.coverImage);
    return (
      <PostDetailPageLayout>
        <PostViewHeader color={post.coverColor}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <MLogo>Prolog;</MLogo>
          </Link>
          <DetailUserButton></DetailUserButton>
        </PostViewHeader>
        <PostContentWrapper>
          
          <PostContent>
          
          {post.coverImage ? (
            <>
            <Coverimg src={post.coverImage}>
              
            </Coverimg>
            <Title>{post.title}</Title>
            </>
          ) : (
            <Cover color={post.coverColor}>
              <Title>{post.title}</Title>
              
            </Cover>
          )}
            
            
            {/* <p>게시날짜: </p> */}
            
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
            {/* <PostMeta
              post={this.props.postStore.detailPost}
              canModify={canModify}
              onDelete={this.handleDeletePost}
            ></PostMeta>
            <PostDetail postid={this.props.postStore.detailPost.postCode}></PostDetail>
            <PostTags></PostTags>
            <hr></hr>
            <PostActions
              canModify={canModify}
              post={this.props.postStore.detailPost}
              onDelete={this.handleDeletePost}
            />
            <PostComments
              comments={comments}
              postId={this.props.postStore.detailPost.postCode}
              currentUser={currentUser}
              onDelete={this.handleDeleteComment}
            ></PostComments> */}
          </PostContent>
        </PostContentWrapper>
      </PostDetailPageLayout>
    );
  }
}

const Title = styled.div`
  z-index: 2;
  padding-top: 15rem;
  padding-left: 15rem;
  width: 80%;
  font-size: 3.5rem;
  white-space: pre-line;
  font-family: Inconsolas;
`;
const Date = styled.div`
  z-index: 2;
  padding-top: 14rem;
  padding-left: 7rem;
  /* font-size: 60px; */
  font-family: Inconsolas;
`;
const Coverimg = styled.img`
z-index: 2;
  height: 28rem;
  width: 100%;
  /* border-bottom-style: solid;
  border-color: gray;
  border-width: 1px; */
  position: relative;
  /* -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in; */
`;

const Cover = styled.div`
z-index: 2;
  height: 28rem;
  /* border-bottom-style: solid;
  border-color: gray;
  border-width: 1px; */
  position: relative;
  background-color: ${props => props.color};
  /* -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in; */
`;

export default PostDetailPage;
export const LINKS = styled(Link)`
  
`;

export const DetailUserButton = styled(UserButton)`
  
`;
const EditorLayout = styled.div`
  box-sizing: border-box;
  /* border: 1px solid #ddd; */
  cursor: text;
  padding: 16px;
  border-radius: 2px;
  margin-bottom: 2em;
  /* box-shadow: inset 0px 1px 8px -3px #ababab; */
  background: #fefefe;
`;
const TestContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;

const PostDetailPageLayout = styled.div`
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  display: grid;
  grid-template-rows: 5rem;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 5rem;
  /* grid-template-columns: 15% 70% 15%;
  grid-template-areas: "nav content"; */
`;

//TODO 얘는 그리드말고 나중에 flex로 양방향 쪼개기 하면 될듯
const PostViewHeader = styled.div`
  display: grid;
  /* grid-template-columns: repeat(5, 1fr); */
  grid-template-areas: "logo . . . test";
  height: 100%;
  width: 100%;
  background-color: ${props => props.color};
`;

const MLogo = styled.div`
  grid-area: logo;
  padding-left: 1.5rem;
  align-items: end;
  cursor: pointer;
  color: white;
  font-size: 2rem;
  line-height: 2rem;
  font-family: Inconsolata;
  padding-top: 1rem;
`;

const DIV = styled.div`
  grid-area: test;
`;

const PostContentWrapper = styled.div`
  /* padding-top: 5rem; */
  padding-bottom: 5rem;
  display: grid;
  grid-template-columns: 0% 100% 0%;
  grid-template-areas: "left contents right";

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-areas: "contents";
  }
`;

const Left = styled.div`
  grid-area: left;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  grid-area: right;
  @media (max-width: 768px) {
    display: none;
  }
`;

const PostContent = styled.div`
  grid-area: contents;
  /* padding-left: 3rem;
  padding-right: 3rem; */

  @media (max-width: 768px) {
    /* padding-left: 1rem;
    padding-right: 1rem; */
  }
`;

const CenterAreaLayout = styled.div`
  grid-template-columns: auto;
  height: 70vh;
  display: grid;
`;

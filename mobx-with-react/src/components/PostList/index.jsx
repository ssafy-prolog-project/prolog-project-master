import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import Loader from "react-loader-spinner";

@inject("postStore")
@observer
class PostList extends Component {
 
  componentDidMount(){
    this.props.postStore.loadPosts();
  }

  state = {
    items: [],
    hasMoreItems: true
  };
//    componentDidMount() {
    
// const { postStore } = this.props;
  
// postStore.loadPosts();
//   //postStore.getItems(0, 5);
//   //console.log(postStore.postItems);
//   console.log(postStore.returnItems);
//     this.setState({
//       items: postStore.returnItems
      
//     });
// console.log(this.items);
    
//   }


  //추가로 데이터를 호출한다. axios로. 이걸 여기서 할지 store에서 할 지는 고민을 좀 해보자.
  fetchMoreData = () => {
    if (this.state.items.length >= this.props.postStore.length) {
      this.setState({ hasMoreItems: false });
      return;
    }

    setTimeout(() => {
      this.props.postStore.getItems(this.state.items.length, 6);
      this.setState({
        items: this.state.items.concat(this.props.postStore.returnItems)
      });
    }, 500);
  };

  render() {
    const { items, hasMoreItems } = this.state;
    
    return (
      <InfiniteScroll
        dataLength={this.props.postStore.returnItems.length}
        next={this.fetchMoreData}
        hasMore={hasMoreItems}
        loader={
          <div style={{ textAlign: "center" }}>
            <Loader
              type="ThreeDots"
              color="#1A3365"
              height={100}
              width={100}
              timeout={1500} //3 secs
            />
          </div>
        }
        endMessage={<h4>End</h4>}
      >
        
        <GridDiv>
        
          {this.props.postStore.returnItems.map((item, index) => (
            
             <PostCard key={index} post={item} />
          ))}
        </GridDiv>
     </InfiniteScroll>
    );
  }
}

export default PostList;

const GridDiv = styled.div`
  padding: 2%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 33%);
  grid-template-rows: repeat(auto-fit, 1fr);
  z-index: 1;

  @media (max-width: 1024px) {
    /*태블릿?*/
    grid-template-columns: repeat(auto-fit, 50%);
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 100%;

    grid-template-rows: repeat(auto-fit, 1fr);
  }
`;

import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

@inject("post")
@observer
class PostList extends Component {
  state = {
    items: [],
    hasMoreItems: true
  };

  componentDidMount() {
    const { post } = this.props;
    post.getItems(0,6);
    this.setState({
      items: post.returnItems
    });
  }

  fetchMoreData = () => {
    if (this.state.items.length >= this.props.post.postItems.length) {
      this.setState({ hasMoreItems: false });
      return;
    }
    
    setTimeout(() => {
      this.props.post.getItems(this.state.items.length, 6);
      this.setState({ items: this.state.items.concat(this.props.post.returnItems) });
    }, 500);
  };

  render() {
    const { items, hasMoreItems } = this.state;
    
    return (
<<<<<<< HEAD

        <InfiniteScroll
          height = "800px"
=======
      <InfiniteScroll 
>>>>>>> 42b6f3782584b8a679a5fb5e9dc7ed9693600cd5
          dataLength={items.length}
          next={this.fetchMoreData}
          hasMore={hasMoreItems}
          loader={<h4>Loading...</h4>}
          endMessage={<h4>End</h4>}
        >
          <GridDiv >
          {items.map((item, index) => (
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

import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

@inject("postStore")
@observer
class PostList extends Component {
  state = {
    items: [],
    hasMoreItems: true
  };

  componentDidMount() {
    const { postStore } = this.props;
    postStore.getItems(0,6);
    this.setState({
      items: postStore.returnItems
    });
  }

  fetchMoreData = () => {
    if (this.state.items.length >= this.props.postStore.postItems.length) {
      this.setState({ hasMoreItems: false });
      return;
    }
    
    setTimeout(() => {
      this.props.postStore.getItems(this.state.items.length, 6);
      this.setState({ items: this.state.items.concat(this.props.postStore.returnItems) });
    }, 500);
  };

  render() {
    const { items, hasMoreItems } = this.state;
    
    return (
      <InfiniteScroll 
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

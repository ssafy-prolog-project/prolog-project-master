import React, {Component} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import PostList from '../../components/PostList';
import NavBar from '../../components/NavBar';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import MobileNavBar from '../../components/MobileNavBar';


class MainPage extends Component{
    state = {
        items: Array.from({ length: 1 })
    };

    fetchMoreData = () => {
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(Array.from({ length: 1 }))
          });
        }, 1500);
    };

    render(){
        return(
            <MainPageLayout>
                <NavBar></NavBar>
                <Div>
                    <TopBar></TopBar>
                    <MobileNavBar></MobileNavBar>
                    <InfiniteScroll
                        dataLength={this.state.items.length}
                        next={this.fetchMoreData}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                    >
                    {this.state.items.map((i, index) => (
                        <PostList key={index} />
                    ))}
                    </InfiniteScroll>
                </Div>
            </MainPageLayout>
        )
    }
}
// const MainPage = () => (
//     <MainPageLayout>
//         <NavBar></NavBar>
//         <Div>
//             <TopBar></TopBar>
//             <MobileNavBar></MobileNavBar>
//             <PostList></PostList>
//         </Div>
//     </MainPageLayout>
// );

const MainPageLayout = styled.div`
    height: 100vh;
    display: grid;
    overflow-y: hidden;
    grid-template-columns: 290px;
    grid-template-areas:
        "nav content";
    @media (max-width: 768px) {
        grid-template-columns: 100vw;
    }
`;

const Div = styled.div`
    padding-bottom: 5%;
    display: grid;
    grid-template-rows: 9% 9% 82%;
    overflow-y: scroll;
`


export default MainPage;
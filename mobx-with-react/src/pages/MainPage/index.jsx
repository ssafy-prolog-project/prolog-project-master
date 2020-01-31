import React from "react";
import PostList from "../../components/PostList";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import TopBar from "../../components/TopBar";
import MobileNavBar from "../../components/MobileNavBar";


class MainPage extends React.Component{
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 10)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render(){
    return(
      <MainPageLayout>
    <NavBar></NavBar>
    <Div>
      <TopBar></TopBar>
      <MobileNavBar></MobileNavBar>
      <PostList></PostList>
    </Div>
  </MainPageLayout>
    )
  }
}


const MainPageLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 290px;
  grid-template-areas: "nav content";
  @media (max-width: 768px) {
    grid-template-columns: 100vw;
  }
`;

const Div = styled.div`
  padding-bottom: 5%;
  display: grid;
  grid-template-rows: fit-content(9%) fit-content(9%) 82%;
`;

export default MainPage;

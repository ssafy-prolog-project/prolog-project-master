import React, { Component, useState } from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

// Pages
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import PostDetailPage from "./pages/PostDetailPage";
import MyPage from "./pages/MyPage";
import PostWritePage from "./pages/PostWritePage";
import SearchPage from "./pages/SearchPage";
import { signIn } from "./components/Auth/auth";
import PrivateRoute from "./PrivateRoute";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Switch>
        {/* 
            <Route path="/register" component={Register} />
            <Route path="/editor/:slug?" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <PrivateRoute path="/settings" component={Settings} />
            <Route path="/@:username" component={Profile} />
            <Route path="/@:username/favorites" component={Profile} />
            <Route path="/" component={Home} /> */}
        {/* <Route path="/post/:id" component={Post} */}
        <Route path="/login" component={LoginPage} />
        <Route path="/post/:id" component={PostDetailPage} />
        <Route path="/mypage/:msrl" component={MyPage} />
        <Route path="/mypage" component={MyPage} />
        {/* <PrivateRoute path="/mypage" component={MyPage} /> */}
        <Route path="/write" component={PostWritePage} />
        <Route path="/searchpage" component={SearchPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  #root{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    vertical-align: top;
    border:0;
    outline:0;
    
  }
  html{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    vertical-align: top;
    border:0;
    outline:0;
  }
  body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    vertical-align: top;
    border:0;
    outline:0;
  }
`;
export default App;

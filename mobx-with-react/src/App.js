import React, {Component} from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

// Pages 
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import PostDetailPage from './pages/PostDetailPage';
import MyPage from './pages/MyPage';
import PostWritePage from './pages/PostWritePage';
import SearchPage from './pages/SearchPage';

class App extends Component {
  render(){
    return(
      <div>
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
            <Route path="/mypage" component={MyPage} />
            <Route path="/postwritepage" component={PostWritePage} />
            <Route path="/searchpage" component={SearchPage} />
            <Route path="/" component={MainPage} />
          </Switch>
      </div>
    );
  }
}
export default App;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
// import PropTypes from 'prop-types' // 받거나 window.proptyes 로 쓰면 브라우저에 로딩되어 있다.

@inject("userStore")
@observer
class PrivateRoute extends React.Component {
  render() {
    const { userStore, ...restProps } = this.props;
    if (userStore.currentUser) return <Route {...restProps} />;
    return <Redirect to="/login" />;
  }
}

export default PrivateRoute;

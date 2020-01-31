import React, {PropTypes} from 'react';

export default class AsyncComponent extends React.Component {
    static propTypes = {
      loader: PropTypes.func.isRequired,
    }
  
    state = {
      Component: null,
    }
  
    componentDidMount = () => {
      this.props.loader().then((Component) => {
        this.setState({ Component: Component.default });
      });
    }
  
    _generateProps = () => {
      const props = { ...this.props };
      delete props.loader;
      return props;
    }
  
    render = () => {
      const props = this._generateProps();
      if (this.state.Component) {
        return <this.state.Component {...props} />;
      }
      return <div className="placeholder">Looooooding</div>;
    }
  }
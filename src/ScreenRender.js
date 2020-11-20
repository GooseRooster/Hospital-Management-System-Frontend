
import UpdateDetails from './UpdateDetails'
import Register from './Register'
import React from 'react';

class ScreenRender extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.state = {Screen: 'update'};
  }
 
  handleUpdateClick() {
    this.setState({Screen: 'update'});
  }

  handleRegisterClick() {
    this.setState({Screen: 'register'});
  }

  componentDidMount() { 
    this.setState({Screen: this.props.screen})
  }
  render() {
    const screen = this.state.Screen;
    let button;
    if (screen==='update') {
      button = <UpdateDetails/>;
    } else if(screen ==='register'){
      button = <Register/>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}
export default ScreenRender;


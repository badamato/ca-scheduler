import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar'

import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position='static'>
          <img className='logo' src={require('./images/calogo.jpeg')} alt='logo ' />
        </AppBar>

      </div>
    )
  }
}

export default connect()(App);

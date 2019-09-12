import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Dashboard from './components/Dashboard';

import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar className='appbar' color='white' position='static'>
          <img className='logo' src={require('./images/calogo.jpeg')} alt='logo ' />
        </AppBar>
        <Dashboard />
      </div>
    )
  }
}

export default App;

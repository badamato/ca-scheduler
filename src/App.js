import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar className='appbar' color='white' position='static'>
          <img className='logo' src={require('./images/calogo.jpeg')} alt='logo ' />
        </AppBar>
        <Typography variant='h4' component='h6'>React & Redux Booking Scheduler</Typography>
      </div>
    )
  }
}

export default App;

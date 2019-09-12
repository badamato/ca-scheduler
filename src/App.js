import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
//component file
import Dashboard from './components/Dashboard';
//style file
import './styles/styles.css';

class App extends Component {
    render() {
        return (
        <div className="App">
            <AppBar className='appbar' color='white' position='static'>
            <img className='logo' src={require('./images/calogo.jpeg')} alt='logo ' />
            </AppBar>
            <Paper className='dashboard-container'>
                <div className='title'>
                    Cox Automotive Booking Application
                </div>
                <Dashboard />
            </Paper>
        </div>
        )
    }
}

export default App;

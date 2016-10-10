import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import WodListContainer from './Components/WodListContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar title="react TODO" />
        </MuiThemeProvider>

        <WodListContainer />
      </div>
    );
  }
}

export default App;

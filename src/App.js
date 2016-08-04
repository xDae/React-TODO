import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import WodListContainer from './wodlist/WodListContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
				<MuiThemeProvider>
					<AppBar title="WODLOG" />
				</MuiThemeProvider>

        <WodListContainer />
			</div>
    );
  }
}

export default App;

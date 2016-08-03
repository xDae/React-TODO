import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import WodList from './WodList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  _adddWod(text) {
    const Wod = {
      text: text
    };

    this.setState({
      list: this.state.list.concat([Wod])
    });
  }

  render() {
    return (
      <div className="App">
				<MuiThemeProvider>
					<AppBar title="WODLOG" />
				</MuiThemeProvider>

        <WodList addWod={this._adddWod.bind(this)} list={this.state.list} />
			</div>
    );
  }
}

export default App;

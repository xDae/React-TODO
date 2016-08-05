import React from 'react';
import '../App.css';

import AddWodForm from './AddWodForm';
import Wodlist from './WodList';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class WodListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  _adddWod(name) {
    const Wod = {
      id: this.state.list.length + 1,
      name
    };

    this.setState({
      list: this.state.list.concat([Wod])
    });
  }

  _deleteWod(id) {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }

	render() {
		return (
			<MuiThemeProvider>
				<div className="wod-list">
          <AddWodForm addWod={this._adddWod.bind(this)} />
          <Wodlist list={this.state.list} deleteWod={this._deleteWod.bind(this)} />
				</div>
			</MuiThemeProvider>
		);
	}

}

export default WodListContainer;

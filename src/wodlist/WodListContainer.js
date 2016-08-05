import React from 'react';
import localforage from 'localforage';
import '../localStorageConfig';

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

		this._adddWod = this._adddWod.bind(this)
		this._deleteWod = this._deleteWod.bind(this);
  }

	componentWillMount() {
		localforage.getItem('wodList')
		.then((value) => {
			this.setState({
	      list: value
	    });
		})
	}

	updateState = (Wod) => {
		this.setState({
			list: Wod
		});
	};

  _adddWod(name) {
    let Wod = {
      id: this.state.list.length + 1,
      name
    };
		let newState = this.state.list.concat([Wod]);

		localforage.setItem('wodList', newState)
		.then(() => {
			this.updateState(newState);
		})
		.catch(function (err) {
		  console.log(err);
		});
  }

  _deleteWod(id) {
		let newState = this.state.list.filter(item => item.id !== id);

		localforage.setItem('wodList', newState)
		.then(() => {
			this.updateState(newState);
		})
		.catch(function (err) {
		  console.log(err);
		});
  }

	render() {
		return (
			<MuiThemeProvider>
				<div className="wod-list">
          <AddWodForm addWod={this._adddWod} />
          <Wodlist list={this.state.list} deleteWod={this._deleteWod} />
				</div>
			</MuiThemeProvider>
		);
	}

}

export default WodListContainer;

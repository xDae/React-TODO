import React from 'react';
import localforage from 'localforage';
import uniqueId from 'lodash/uniqueId';

import '../localStorageConfig';

import '../App.css';

import AddWodForm from './Form';
import Wodlist from './List';

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
		.then((wodList) => {
			if (wodList !== null) {
				this.setState({
					list: wodList
				});
			}
		})
	}

	updateState = wod => {
		this.setState({
			list: wod
		});
	};

	_adddWod(name) {
		let wod = {
			id: uniqueId(),
			name
		};

		let newState = this.state.list.concat([wod]);

		localforage.setItem('wodList', newState)
		.then(() => {
			this.updateState(newState);
		})
		.catch(function (err) {
			console.error(err);
		});
	}

	_deleteWod(id) {
		let newState = this.state.list.filter(item => item.id !== id);

		localforage.setItem('wodList', newState)
		.then(() => {
			this.updateState(newState);
		})
		.catch(function (err) {
			console.error(err);
		});
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="wod-list">
					<AddWodForm addWod={this._adddWod} />
					<Wodlist
						list={this.state.list}
						deleteWod={this._deleteWod} />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default WodListContainer;

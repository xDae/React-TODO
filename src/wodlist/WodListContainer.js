import React from 'react';
// import update from 'react-addons-update';
import '../App.css';

import AddWodForm from './AddWodForm';
import Wodlist from './WodList';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class WodListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id:1, name: 'Hello'},
        {id:2, name: 'World'},
        {id:3, name: 'How'},
        {id:4, name: 'Are'},
        {id:5, name: 'You'},
        {id:6, name: '?'}
      ]
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

  _deleteWod(item) {
    console.log(item);
    // const newState = this.state.list;
    // if (newState.indexOf(item) > -1) {
    //   newState.splice(newState.indexOf(item), 1);
    //   this.setState({list: newState})
    // }
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

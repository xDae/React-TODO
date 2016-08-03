import React from 'react';

import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
// import ContentInbox from 'material-ui/svg-icons/content/inbox';
// import ActionGrade from 'material-ui/svg-icons/action/grade';
// import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// import ActionInfo from 'material-ui/svg-icons/action/info';

import TextField from 'material-ui/TextField';

class WodList extends React.Component {
  _handleIcon(icon) {
    return <ContentDrafts />
  }

	_handleSubmit(event) {
		event.preventDefault();
		let wodName = this._wodName;

		if (wodName.input.value !== null && wodName.input.value !== undefined && wodName.input.value !== '' ) {
			// console.log(wodName.input.value);
			this.props.addWod(wodName.input.value);
		}

	}

	render() {
		let { list } = this.props;

		return (
			<MuiThemeProvider>
				<div className="wod-list">
					<List>
						<form onSubmit={this._handleSubmit.bind(this)}>
							<TextField
								ref={(input) => this._wodName = input}
								fullWidth={true}
								hintText="Write a WOD"
							/>
							<RaisedButton label="Submit" primary={true} onClick={this._handleSubmit.bind(this)} />
						</form>

						{list.map((listItem, index) => (
							<ListItem key={index} primaryText={listItem.text} leftIcon={this._handleIcon(ListItem.icon)} />
						))}
					</List>
				</div>
			</MuiThemeProvider>
		);
	}

}

export default WodList;

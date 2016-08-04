import React from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

class WodList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				text: ''
			}
		};
	}

  _handleIcon(icon) {
    return <ContentDrafts />
  }

	_handleInputChange(e) {
		this.setState({
			form: {
				text: e.target.value
			}
		});
	}

	_handleSubmit(event) {
		event.preventDefault();

		let text = this.state.form.text;

		if (text !== null && text !== undefined && text !== '' ) {
			this.props.addWod(text);
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
								fullWidth={true}
								hintText="Write a WOD"
								value={this.state.form.text}
								onChange={this._handleInputChange.bind(this)}
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

import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddWodForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				input: ''
			}
		};
	}

	_emptyInput() {
    this.setState({
			form: {
				input: ''
			}
		});
  }

	_handleInputChange(event) {
		this.setState({
			form: {
				input: event.target.value
			}
		});
	}

	_handleSubmit(event) {
		event.preventDefault();

		let wodName = this.state.form.input;

		if (wodName !== null && wodName !== undefined && wodName !== '') {
			this.props.addWod(wodName);
      this._emptyInput();
		}
	}

	render() {
		return (
			<form onSubmit={this._handleSubmit.bind(this)}>
				<TextField
					fullWidth={true}
					hintText="Write a WOD"
					value={this.state.form.input}
					onChange={this._handleInputChange.bind(this)} />
				<RaisedButton label="Submit" primary={true} onClick={this._handleSubmit.bind(this)} />
			</form>
		);
	}

};

export default AddWodForm;

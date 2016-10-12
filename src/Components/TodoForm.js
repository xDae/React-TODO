// @flow

import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

type form = {
  form: {
    input: string
  }
}

class TodoForm extends Component {
  state: form

  constructor() {
    super();
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

  _handleInputChange = ({ target }: { target: Object }): void => {
    this.setState({
      form: {
        input: target.value
      }
    });
  }

  _handleSubmit = (e: Object ) => {
    console.log(e);
    e.preventDefault();

    let todoText = this.state.form.input;

    if (todoText !== null && todoText !== undefined && todoText !== '') {
      this.props.addTodo(todoText);
      this._emptyInput();
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <form onSubmit={this._handleSubmit}>
          <TextField
            fullWidth={true}
            hintText="Write a TODO"
            value={this.state.form.input}
            onChange={this._handleInputChange}
          />
          <RaisedButton
            label="Submit"
            primary={true}
            onClick={this._handleSubmit}
          />
        </form>
      </MuiThemeProvider>
    );
  }

};

export default TodoForm;

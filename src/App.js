// @flow

import React, { Component } from 'react';

import './App.css';

import localforage from 'localforage';
import shortid from 'shortid';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import TodoForm from './Components/TodoForm';

type todo = {
  key: string,
  done: boolean,
  name: string
}

class App extends Component {
  state: {
    todoList: Array<todo>
  };

  constructor() {
    super();

    this.state = {
      todoList: []
    };
  }

  componentWillMount() {
    localforage.getItem('todoList')
    .then(todoList => {
      if (todoList !== null) {
        this.setState({ todoList });
      }
    })
  }

  addTodo = (name: string): void => {
    const todoItem = {
      key: shortid.generate(),
      done: false,
      name
    };

    const newState = this.state.todoList.concat([todoItem]);

    localforage.setItem('todoList', newState)
    .then(() => {
      this.setState({
        todoList: newState
      });
    })
    .catch(function (err) {
      console.error(err);
    });
  }

  deleteElement = (id: string) => {
    // console.log(`deleting: ${id}`);

    const newState = this.state.todoList.filter(({key}) => key !== id);

    localforage.setItem('todoList', newState)
    .then(() => {
      this.setState({ todoList: newState });
    })
    .catch(function (err) {
      console.error(err);
    });
  }

  iconButtonElement = () => (
    <IconButton
      touch={true}
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon />
    </IconButton>
  );

  rightIconMenu = (key: string) => {
    return (
      <IconMenu iconButtonElement={this.iconButtonElement()}>
        <MenuItem onTouchTap={() => this.deleteElement(key)}>Delete</MenuItem>
      </IconMenu>
    )
  };

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar title="react TODO" />
        </MuiThemeProvider>

        <TodoForm addTodo={this.addTodo} />

        <MuiThemeProvider>
          <List>
            {this.state.todoList.map(({key, name}) => (
              <ListItem
                key={key}
                primaryText={name}
                rightIconButton={this.rightIconMenu(key)}
              />
            ))}
          </List>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

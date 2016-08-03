import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import App from '../App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

storiesOf('App', module)
  .add('Default View', () => (
    <App />
  ))
	.add('AppBar', () => (
		<MuiThemeProvider>
			<AppBar title="WODLOG" />
		</MuiThemeProvider>
  ));

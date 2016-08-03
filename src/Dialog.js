import React from 'react';
import Dialog from 'material-ui/Dialog';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';

import AutoCompleteWods from './AutoComplete';

const buttonStyle = {
	position: 'fixed',
	right: '20px',
	bottom: '20px'
};

class DialogExampleSimple extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
				<FloatingActionButton style={buttonStyle} onClick={this.handleOpen}>
					<ContentAdd />
				</FloatingActionButton>

        <Dialog
          title="Add a Workout"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
>
					<AutoCompleteWods dataSource={['uno', 'dos', 'tres']}/>
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}

export default DialogExampleSimple;

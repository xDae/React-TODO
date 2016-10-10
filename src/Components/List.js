import React from 'react';
import { List, ListItem } from 'material-ui/List';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class WodList extends React.Component {
  _deleteElement(id) {
    this.props.deleteWod(id);
  }

  rightIconMenu(id) {
    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon />
      </IconButton>
    );

    return (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem onTouchTap={() => {this._deleteElement(id)}}>Delete</MenuItem>
      </IconMenu>
    )
  };

  render() {
    let { list } = this.props;

    return (
      <List>
        {list.map(({id, done, name}) => (
          <ListItem
            done={done}
            key={id}
            primaryText={name}
            rightIconButton={this.rightIconMenu(id)}
          />
        ))}
      </List>
    );
  }

};

export default WodList;

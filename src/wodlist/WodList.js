import React from 'react';
import {List, ListItem} from 'material-ui/List';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class WodList extends React.Component {
	_deleteElement(event) {
		// console.log(event);
		console.log(this._algo);
		// this.props.deleteWod();
	}

	render() {
		let { list } = this.props;

		const iconButtonElement = (
		  <IconButton
		    touch={true}
		    tooltipPosition="bottom-left"
		  >
		    <MoreVertIcon />
		  </IconButton>
		);

		const rightIconMenu = (
		  <IconMenu iconButtonElement={iconButtonElement}>
		    <MenuItem>Reply</MenuItem>
		    <MenuItem>Forward</MenuItem>
		    <MenuItem onTouchTap={this._deleteElement.bind(this)}>Delete</MenuItem>
		  </IconMenu>
		);

		return (
			<List>
				{list.map((listItem) => (
					<ListItem
						ref={(c) => this._algo = c}
						key={listItem.id}
						primaryText={listItem.name}
						rightIconButton={rightIconMenu}
					/>
				))}
			</List>
		);
	}

};

export default WodList;

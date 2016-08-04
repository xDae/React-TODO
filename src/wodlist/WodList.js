import React from 'react';
import {List, ListItem} from 'material-ui/List';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class WodList extends React.Component {
	_console(event) {
		console.log(event);
	}

	// deleteElement() {
	//
	// }

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
		    <MenuItem onTouchTap={this._console}>Delete</MenuItem>
		  </IconMenu>
		);

		return (
			<List>
				{list.map((listItem, index) => (
					<ListItem
						// deleteElement={}
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

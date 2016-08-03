import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class AutoCompleteWods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ['uno', 'dos', 'tres'],
    };
  }

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Write a Wod"
          dataSource={this.state.dataSource}
					filter={AutoComplete.caseInsensitiveFilter}
					maxSearchResults={5}
/>
      </div>
    );
  }
}

export default AutoCompleteWods;

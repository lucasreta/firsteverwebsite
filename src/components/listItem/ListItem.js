import React from 'react';

import {parseContentEntity} from '../../utils/multipleUsefulTools.js';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedContentEntity: parseContentEntity(props.contentEntity),
    };
  }

  render() {
    return (
      <li>
        {this.state.parsedContentEntity}
      </li>
    );
  }
}

export default ListItem;

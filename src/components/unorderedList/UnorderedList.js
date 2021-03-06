import React from 'react';

import {parseContentEntity} from '../../utils/multipleUsefulTools.js';

class UnorderedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedContentEntity: parseContentEntity(props.contentEntity),
    };
  }

  render() {
    return (
      <ul>
        {this.state.parsedContentEntity}
      </ul>
    );
  }
}

export default UnorderedList;

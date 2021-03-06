import React from 'react';

import {parseContentEntity} from '../../utils/multipleUsefulTools.js';

class DescriptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedContentEntity: parseContentEntity(props.contentEntity),
    };
  }

  render() {
    return (
      <dl>
        {this.state.parsedContentEntity}
      </dl>
    );
  }
}

export default DescriptionList;

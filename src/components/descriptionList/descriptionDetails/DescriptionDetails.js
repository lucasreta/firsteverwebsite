import React from 'react';

import {parseContentEntity} from '../../../utils/multipleUsefulTools.js';

class DescriptionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedContentEntity: parseContentEntity(props.contentEntity),
    };
  }

  render() {
    return (
      <dd>
        {this.state.parsedContentEntity}
      </dd>
    );
  }
}

export default DescriptionDetails;

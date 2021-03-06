import React from 'react';

import {parseContentEntity} from '../../../utils/multipleUsefulTools.js';

class DescriptionTerm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedContentEntity: parseContentEntity(props.contentEntity),
    };
  }

  render() {
    return (
      <dt>
        {this.state.parsedContentEntity}
      </dt>
    );
  }
}

export default DescriptionTerm;

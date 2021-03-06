import React from 'react';

import {parseContentEntity} from '../../utils/multipleUsefulTools.js';

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedContentEntity: parseContentEntity(props.contentEntity),
    };
  }

  render() {
    return (
      <p>
        {this.state.parsedContentEntity}
      </p>
    );
  }
}

export default Paragraph;

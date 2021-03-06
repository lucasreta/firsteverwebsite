import React from 'react';

import './Heading.css';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headingText: props.text,
    };
  }

  render() {
    return (
      <h1>{this.state.headingText}</h1>
    );
  }
}

export default Heading;

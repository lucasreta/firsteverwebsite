import React from 'react';

class Plaintext extends React.Component {
  render() {
    return (
      <>
        {this.props.content}
      </>
    );
  }
}

export default Plaintext;

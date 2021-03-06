import React from 'react';

class HypertextAnchor extends React.Component {

  render() {
    return (
      <a 
        href={this.props.hypertextReference} 
        data-hyperlink-type={`${this.props.isThisAnInternalHyperlink === "yes" ? 'internal' : 'external'}`}
        >
          {/* Here will be displayed the Anchor elements text: */}
          {this.props.hyperlinkUserReadableValue}
      </a>
    );
  }
}

export default HypertextAnchor;

import React from 'react';

import {parseContentEntity} from '../utils/multipleUsefulTools.js';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    try {
      const contentEntity = require(`../data/${props.match.params.url || 'TheProject.html'}.json`)
      this.state = {
        parsedContentEntity: parseContentEntity(contentEntity),
      };
    } catch(error) {
      const contentEntity = require('../data/404.json')
      this.state = {
        parsedContentEntity: parseContentEntity(contentEntity),
      };
    }
  }

  render() {
    return (
      <>
        {this.state.parsedContentEntity}
      </>
    );
  }
}

export default MainLayout;

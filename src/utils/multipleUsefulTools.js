import React from 'react';

import DescriptionList from '../components/descriptionList/DescriptionList.js';
import DescriptionDetails from '../components/descriptionList/descriptionDetails/DescriptionDetails.js';
import DescriptionTerm from '../components/descriptionList/descriptionTerm/DescriptionTerm.js';
import Heading from '../components/heading/Heading.js';
import HypertextAnchor from '../components/hypertextAnchor/HypertextAnchor.js';
import ListItem from '../components/listItem/ListItem.js';
import Paragraph from '../components/paragraph/Paragraph.js';
import Plaintext from '../components/plaintext/Plaintext.js';
import UnorderedList from '../components/unorderedList/UnorderedList.js';

const Components = {
  DescriptionList,
  DescriptionDetails,
  DescriptionTerm,
  Heading,
  HypertextAnchor,
  ListItem,
  Paragraph,
  Plaintext,
  UnorderedList
};

export const parseContentEntity = (contentEntity) => {
  const parsedEntityJSX = [];
  contentEntity.forEach((lowerTierContentEntity, index) => {
    parsedEntityJSX.push(
      React.createElement(Components[lowerTierContentEntity.type], {
        ...lowerTierContentEntity.properties,
        key: `${Date.now()}${index}`
      })
    );
  });
  return parsedEntityJSX;
};

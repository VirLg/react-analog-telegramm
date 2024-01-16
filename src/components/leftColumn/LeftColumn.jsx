import React from 'react';

import ItemContact from '../itemContact/ItemContact';
import { LeftColumnDiv } from './LeftColumn.styled';

const LeftColumn = () => {
  return (
    <LeftColumnDiv>
      <ItemContact />
      <ItemContact />
      <ItemContact />
      <ItemContact />
      <ItemContact />
    </LeftColumnDiv>
  );
};

export default LeftColumn;

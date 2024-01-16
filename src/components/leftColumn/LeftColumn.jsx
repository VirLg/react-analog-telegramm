import React from 'react';
import RightColumn from '../rightColumn/RightColumn';
import MiddleColumn from '../middleColumn/MiddleColumn';
import ItemContact from '../itemContact/ItemContact';
import { LeftColumnDiv } from './LeftColumn.styled';

const LeftColumn = () => {
  return (
    <LeftColumnDiv>
      LeftColumn
      <ItemContact />
    </LeftColumnDiv>
  );
};

export default LeftColumn;

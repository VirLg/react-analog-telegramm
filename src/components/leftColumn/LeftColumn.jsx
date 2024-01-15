import React from 'react';
import RightColumn from '../rightColumn/RightColumn';
import MiddleColumn from '../middleColumn/MiddleColumn';

const LeftColumn = () => {
  return (
    <div>
      LeftColumn
      <RightColumn />
      <MiddleColumn />
    </div>
  );
};

export default LeftColumn;

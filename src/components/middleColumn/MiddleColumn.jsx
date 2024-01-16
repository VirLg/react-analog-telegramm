import React from 'react';
import InputMessage from '../form/InputMessage';
import MiddleColumnItem from './MiddleColumnItem';
import { MiddleColumnDiv } from './MiddleColumn.styled';

const MiddleColumn = () => {
  const handleMessage = value => {
    console.log('value', value);
  };
  return (
    <MiddleColumnDiv>
      MiddleColumn
      <MiddleColumnItem />
      <MiddleColumnItem />
      <MiddleColumnItem />
      <MiddleColumnItem />
      <InputMessage handleMessage={handleMessage} />
    </MiddleColumnDiv>
  );
};

export default MiddleColumn;

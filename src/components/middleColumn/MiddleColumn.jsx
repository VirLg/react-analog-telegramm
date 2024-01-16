import React from 'react';
import InputMessage from '../form/InputMessage';
import MiddleColumnItem from './MiddleColumnItem';
import { MiddleColumnDiv } from './MiddleColumn.styled';

const MiddleColumn = () => {
  const handleMessage = value => {
    console.log('value', value);
  };
  return (
    <MiddleColumnDiv
      style={{ backgroundImage: `url(require("../utils/images/img.png"))` }}
    >
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

import React from 'react';
import InputMessage from '../form/InputMessage';
import MiddleColumnItem from './MiddleColumnItem';
import { MiddleColumnDiv } from './MiddleColumn.styled';
import { useAddMessageMutation } from '../../redux/rtkQuery/rtkQuery';

const MiddleColumn = () => {
  const [addMessage] = useAddMessageMutation();
  const handleMessage = ({ name }) => {
    console.log('value', name);
    addMessage({ message: name });
  };
  return (
    <MiddleColumnDiv
      style={{ backgroundImage: `url(require("../utils/images/img.png"))` }}
    >
      <MiddleColumnItem />
      <InputMessage handleMessage={handleMessage} />
    </MiddleColumnDiv>
  );
};

export default MiddleColumn;

import React, { useState } from 'react';
import InputMessage from '../form/InputMessage';
import MiddleColumnItem from './MiddleColumnItem';
import { MiddleColumnDiv } from './MiddleColumn.styled';
import { useAddMessageMutation } from '../../components/redux/rtkQuery/rtkQuery';
import ModalWindow from '../modal/ModalWindow';
import { useSelector } from 'react-redux';
import { modalSelector } from '../../components/redux/selector';
import ModalCard from '../modal/ModalCard';

const MiddleColumn = () => {
  const [elementId, setElementId] = useState(null);
  const [addMessage] = useAddMessageMutation();
  const showModal = useSelector(modalSelector);

  const handleMessage = ({ name }) => {
    addMessage({ message: name });
  };
  const handleID = id => {
    setElementId(id);
  };
  return (
    <MiddleColumnDiv
      style={{ backgroundImage: `url(require("../utils/images/img.png"))` }}
    >
      <MiddleColumnItem handleID={handleID} />
      <InputMessage handleMessage={handleMessage} />
      {showModal && (
        <ModalWindow>
          <ModalCard elementId={elementId} />
        </ModalWindow>
      )}
    </MiddleColumnDiv>
  );
};

export default MiddleColumn;

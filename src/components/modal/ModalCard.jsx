// import React from 'react';
// import {
//   H1,
//   H2,
//   H3,
//   ModalWindowImg,
//   RentalCar,
//   Span,
// } from './ModalWindow.styled';

import { useDeleteMessageMutation } from '../redux/rtkQuery/rtkQuery';

// import { useDispatch } from 'react-redux';

const ModalCard = ({ elementId }) => {
  console.log('element', elementId);
  const [deleteMessage] = useDeleteMessageMutation();
  //   console.log('first', deleteMessage);
  return (
    <>
      <button type="button" onClick={() => deleteMessage(elementId)}>
        Delete
      </button>
      <button type="button">Update</button>
    </>
  );
};
export default ModalCard;

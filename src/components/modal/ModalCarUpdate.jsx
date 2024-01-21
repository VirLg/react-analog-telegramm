import React from 'react';
import InputMessage from '../form/InputMessage';
import { useUpdateMessageMutation } from '../redux/rtkQuery/rtkQuery';

const ModalCarUpdate = ({ updateElementID }) => {
  const [updateMessage, { isLoading: isUpdating }] = useUpdateMessageMutation();
  const handleUpdate = value => {
    const { name } = value;
    updateMessage({ id: updateElementID, value: name });
  };
  return (
    <div>
      <InputMessage handleUpdate={handleUpdate} />
      ModalCarUpdate
    </div>
  );
};

export default ModalCarUpdate;

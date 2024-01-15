import React from 'react';
import InputMessage from '../form/InputMessage';

const MiddleColumn = () => {
  const handleMessage = value => {
    console.log('value', value);
  };
  return (
    <div>
      MiddleColumn
      <InputMessage handleMessage={handleMessage} />
    </div>
  );
};

export default MiddleColumn;

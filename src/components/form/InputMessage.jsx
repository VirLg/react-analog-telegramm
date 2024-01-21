import React, { useState } from 'react';
import { InputMessageElement, MessageButton } from './InputComponent.styled';

const InputMessage = ({ handleMessage, handleUpdate }) => {
  const [name, setName] = useState('');

  const handleSbmit = e => {
    e.preventDefault();
    handleMessage && handleMessage({ name });
    handleUpdate && handleUpdate({ name });
    setName('');
  };
  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSbmit} style={{ display: 'flex' }}>
        <InputMessageElement onChange={handleChange} name="name" value={name} />
        <MessageButton type="submit">Submit</MessageButton>
      </form>
    </div>
  );
};

export default InputMessage;

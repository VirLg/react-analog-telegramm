import React, { useState } from 'react';
import { InputElement } from './InputComponent.styled';

const InputSearch = ({ handleMessage }) => {
  const [name, setName] = useState('');

  const handleSbmit = e => {
    e.preventDefault();
    handleMessage({ name });
    setName('');
  };
  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSbmit}>
        <InputElement onChange={handleChange} name="name" value={name} />
      </form>
    </>
  );
};

export default InputSearch;

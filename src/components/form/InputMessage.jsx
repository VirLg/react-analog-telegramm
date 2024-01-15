import React, { useState } from 'react';

const InputMessage = ({ handleMessage }) => {
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
        <input onChange={handleChange} name="name" value={name} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default InputMessage;

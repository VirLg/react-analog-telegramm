import React from 'react';
import { UserDiv } from './User.styled';

const User = () => {
  return (
    <UserDiv>
      <div>
        <span style={{ fontSize: '22px' }}>Alex Ver</span>
      </div>
      <div
        style={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          backgroundColor: 'aqua',
        }}
      >
        Avatar
      </div>
    </UserDiv>
  );
};

export default User;

import React from 'react';
import { AvatarDiv, ItemDiv, Title } from './ItemContact.styled';

const ItemContact = () => {
  return (
    <ItemDiv>
      <AvatarDiv>Avatar</AvatarDiv>
      <div>
        <Title>Contact Name</Title>
        <p>
          <span>User :</span>Message
        </p>
      </div>
      <p
        style={{
          marginLeft: 'auto',
          marginRight: '8px',
        }}
      >
        Date
      </p>
    </ItemDiv>
  );
};

export default ItemContact;

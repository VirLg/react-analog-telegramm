import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderDiv } from './Header.styled';

const Header = () => {
  return (
    <div>
      <HeaderDiv>
        <NavLink to="/">left Column</NavLink>
        <NavLink to="/api/arhive">arhive</NavLink>
      </HeaderDiv>
    </div>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderDiv } from './Header.styled';
import InputMessage from '../form/InputMessage';
import User from '../user/User';
import BurgerMenu from '../menu/BurgerMenu';

const Header = () => {
  return (
    <div>
      <HeaderDiv>
        <div style={{ display: 'flex' }}>
          <BurgerMenu />
          <User />
        </div>
        <InputMessage />
        <NavLink to="/">left Column</NavLink>
        <NavLink to="/api/arhive">arhive</NavLink>
      </HeaderDiv>
    </div>
  );
};

export default Header;

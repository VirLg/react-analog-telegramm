import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderDiv } from './Header.styled';

import User from '../user/User';
import BurgerMenu from '../menu/BurgerMenu';
import InputSearch from '../form/InputSearch';

const Header = () => {
  return (
    <div>
      <HeaderDiv>
        <div style={{ display: 'flex', marginBottom: '6px' }}>
          <BurgerMenu />
          <User />
        </div>
        <InputSearch />
        <NavLink to="/">left Column</NavLink>
        <NavLink to="/api/arhive">arhive</NavLink>
      </HeaderDiv>
    </div>
  );
};

export default Header;

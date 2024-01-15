import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>
        <NavLink to="/">left Column</NavLink>
        <NavLink to="/api/arhive">arhive</NavLink>
      </div>
    </div>
  );
};

export default Header;

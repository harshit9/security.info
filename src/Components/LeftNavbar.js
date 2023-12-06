import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
  return (
    <div className="flex flex-col gap-4 bg-blue-900 w-[288px] justify-center items-center">
      <NavLink exact to="/" activeClassName="active">
        Overview
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        Atom Economic Zone
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Governance
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Assets
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Validators
      </NavLink>
    </div>
  );
};

export default LeftNavbar;

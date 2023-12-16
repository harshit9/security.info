import React from 'react';
import { NavLink } from 'react-router-dom';
import "./LeftNavbar.css";

const LeftNavbar = () => {
  return (
    // TO DO: Add icons to routes and security

    <div className='flex flex-col w-[288px] py-[40px] px-[24px] justify-between border-r-[1px] border-white/[.30] h-screen'>
      {/* Top box */}
      <div className='flex flex-col gap-[30px] items-start'> 
        {/* Shared_security */}
        <div>
          shared_security
        </div>

        {/* horizontal line */}
        <div className='w-[240px] h-[1px] bg-[#D9D9D9]'>
        </div>

        {/* 5 routes */}
        <div className="flex flex-col gap-4 bg-[#05010D] justify-start grow self-stretch">
          <NavLink exact to="/" activeClassName="active" className=' px-[20px] py-[10px]'>
            Overview
          </NavLink>
          <NavLink to="/atom_economic_zone" activeClassName="active" className=' px-[20px] py-[10px]'>
            Atom Economic Zone
          </NavLink>
          <NavLink to="/governance" activeClassName="active" className=' px-[20px] py-[10px]'>
            Governance
          </NavLink>
          <NavLink to="/assets" activeClassName="active" className=' px-[20px] py-[10px]'>
            Assets
          </NavLink>
          <NavLink to="/validators" activeClassName="active" className=' px-[20px] py-[10px]'>
            Validators
          </NavLink>
        </div>
      </div>

      {/* Connect Wallet */}
      <div>
        <button className='flex justify-center items-center w-[240px] gap-[10px] px-[20px] py-[10px] border-[1px] border-white/[.90] rounded-[5px]'> Connect Wallet</button>
      </div>
    </div>
    
    
  );
};

export default LeftNavbar;

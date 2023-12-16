import React from 'react';
import { NavLink } from 'react-router-dom';
import "./LeftNavbar.css";
import assests_icon from "../Icons/Assets.svg"
import atom_icon from "../Icons/Atom.svg"
import governance_icon from "../Icons/Governance.svg"
import overview_icon from "../Icons/Overview.svg"
import site_logo from "../Icons/Siteicon.png"
import validators_icon from "../Icons/Validators.svg"

const LeftNavbar = () => {
  return (
    // TO DO: Add icons to routes and security

    <div className='flex flex-col w-[288px] py-[40px] px-[24px] justify-between border-r-[1px] border-white/[.30] h-screen'>
      {/* Top box */}
      <div className='flex flex-col gap-[30px] items-start'> 
        {/* Shared_security */}
        <div className="flex items-center text-white/[0.90] text-[20px]">
          <img src={site_logo} alt="" className='w-[40px] h-[40px]'/><span className='mt-[4px]'>shared_security</span>
        </div>

        {/* horizontal line */}
        <div className='w-[240px] h-[1px] bg-[#D9D9D9]'>
        </div>

        {/* 5 routes */}
        <div className="flex flex-col gap-4 bg-[#05010D] justify-start grow self-stretch">
          <NavLink exact to="/" activeClassName="active" className=' px-[20px] py-[10px] flex items-center gap-[10px]'>
            <img src={overview_icon} alt="" />Overview
          </NavLink>
          <NavLink to="/atom_economic_zone" activeClassName="active" className=' px-[20px] py-[10px] flex items-center gap-[10px]'>
            <img src={atom_icon} alt="" />Atom Economic Zone
          </NavLink>
          <NavLink to="/governance" activeClassName="active" className=' px-[20px] py-[10px] flex items-center gap-[10px]'>
            <img src={governance_icon} alt="" />Governance
          </NavLink>
          <NavLink to="/assets" activeClassName="active" className=' px-[20px] py-[10px] flex items-center gap-[10px]'>
            <img src={assests_icon} alt="" />Assets
          </NavLink>
          <NavLink to="/validators" activeClassName="active" className=' px-[20px] py-[10px] flex items-center gap-[10px]'>
            <img src={validators_icon} alt="" />Validators
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

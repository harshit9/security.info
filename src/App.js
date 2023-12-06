import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LeftNavbar from './Components/LeftNavbar';
import Overview from './Components/Overview';
import Assets from './Components/Assets';
import Validators from './Components/Validators';
import Atom_Economic_Zone from './Components/Atom_Economic_Zone';
import Governance from './Components/Governance'

const App = () => {
  return (

      <div className="text-white/[.90] bg-[#05010D] flex flex-row h-[100vh] w-full">
        <LeftNavbar />

        <Routes>
          <Route exact path="/" element =<Overview /> />
          <Route path="/assets" element=<Assets /> />
          <Route path="/validators" element=<Validators /> />
          <Route path="/atom_economic_zone" element=<Atom_Economic_Zone /> />
          <Route path="/governance" element=<Governance /> />
        </Routes>
      </div>
  );
};

export default App;

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

      <div className="flex flex-row h-[100vh] w-[400px]">
        <LeftNavbar />

        <Routes>
          <Route exact path="/" component={<Overview />} />
          <Route path="/assets" component={<Assets />} />
          <Route path="/validators" component={<Validators />} />
          <Route path="/atom_economic_zone" component={<Atom_Economic_Zone />} />
          <Route path="/governance" component={<Governance />} />
          </Routes>
      </div>
  );
};

export default App;

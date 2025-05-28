import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from '../Home';
import FactoryLicensePage from '../components/FactoryLicensePage';


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factory-licence" element={<FactoryLicensePage />} />
     
      </Routes>
    </>
  );
};

export default Routing;
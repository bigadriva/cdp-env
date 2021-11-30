import React from 'react';
import { Route, Routes } from "react-router-dom";

import Header from './Components/Header'
import Home from './Components/Home';

export default function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/AtualClients" element={<div>AtualClients</div>}></Route>
        <Route path="/PotencialClients" element={<div>PotencialClients</div>}></Route>
        <Route path="/NewClients" element={<div>NewClients</div>}></Route>
        <Route path="/RecoverClients" element={<div>RecoverClients</div>}></Route>
        <Route path="/SellToClients" element={<div>SellToClients</div>}></Route>
      </Routes>
  </React.Fragment>
  )
}
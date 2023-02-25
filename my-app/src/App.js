import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from './Router/index';
import Web3 from 'web3'

const App = () => {
  return useRoutes(
    routes
  );
};

const AppWrapper = () => {
  function getLibrary(provider) {
    return new Web3(provider)
  }
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

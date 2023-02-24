import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from './Router/index';

const App = () => {
  return useRoutes(
    routes
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

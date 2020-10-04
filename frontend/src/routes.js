import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Activities from './pages/Activities';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/activities" exact component={Activities} />
    </BrowserRouter>
  );
};

export default Routes;
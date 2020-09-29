import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
    </BrowserRouter>
  );
};

export default Routes;